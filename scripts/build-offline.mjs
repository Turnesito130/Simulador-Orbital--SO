import { readFile, mkdir, writeFile, copyFile } from "node:fs/promises";
import { build } from "esbuild";
import { resolve } from "node:path";

const root = process.cwd();
const source = await readFile(resolve(root, "index.html"), "utf8");
const match = source.match(/<script type="module">([\s\S]*?)<\/script>/i);
if (!match) throw new Error("No se encontró el módulo principal de index.html");

const result = await build({
  stdin: {
    contents: match[1],
    resolveDir: root,
    sourcefile: "simulador-entry.js",
    loader: "js"
  },
  bundle: true,
  write: false,
  platform: "browser",
  format: "iife",
  target: ["es2020"],
  minify: true
});

const bundled = result.outputFiles[0].text;
const output = source
  .replace(/<script type="importmap">[\s\S]*?<\/script>\s*/i, "")
  .replace(match[0], '<script src="./app.js"></script>');

const outDir = resolve(root, "dist/Simulador-Orbital-SO");
await mkdir(outDir, { recursive: true });
// Mapas planetarios equirectangulares de Solar System Scope.
// El paquete final los guarda localmente para que la simulación funcione sin Internet.
const textureFiles = [
  "2k_mercury.jpg",
  "2k_venus_surface.jpg",
  "2k_earth_daymap.jpg",
  "2k_earth_clouds.jpg",
  "2k_mars.jpg",
  "2k_jupiter.jpg",
  "2k_saturn.jpg",
  "2k_saturn_ring_alpha.png",
  "2k_uranus.jpg",
  "2k_neptune.jpg"
];
const textureDir = resolve(outDir, "assets/textures");
await mkdir(textureDir, { recursive: true });
const textureMirror = "https://raw.githubusercontent.com/elymas/solar-simulator/d34a9f973a7c4ad683eeb7d080b0accaba81e840/public/textures";
const nasaTextureSources = {
  "mars_cyl_topo2.jpg": "https://svs.gsfc.nasa.gov/vis/a000000/a004400/a004436/mars_cyl_topo2.jpg",
  "lroc_color_2k.jpg": "https://svs.gsfc.nasa.gov/vis/a000000/a004700/a004720/lroc_color_2k.jpg",
  "ldem_3_8bit.jpg": "https://svs.gsfc.nasa.gov/vis/a000000/a004700/a004720/ldem_3_8bit.jpg"
};
for (const [filename, url] of Object.entries(nasaTextureSources)) {
  const response = await fetch(url, { headers: { "User-Agent": "SimuladorOrbitalSO/1.0 (NASA planetary maps)", "Accept": "image/*,*/*;q=0.8" } });
  if (!response.ok) throw new Error(`No se pudo descargar el mapa NASA ${filename}: HTTP ${response.status}`);
  const bytes = Buffer.from(await response.arrayBuffer());
  if (!response.headers.get("content-type")?.startsWith("image/") || bytes.length < 1000) throw new Error(`Respuesta inválida para ${filename}: tipo=${response.headers.get("content-type")}, bytes=${bytes.length}`);
  await writeFile(resolve(textureDir, filename), bytes);
  console.log(`Mapa NASA incluido: ${filename} (${bytes.length} bytes)`);
}
for (const filename of textureFiles) {
  // Espejo versionado de los mapas Solar System Scope (CC BY 4.0); se fija el commit para builds reproducibles.
  const url = `${textureMirror}/${filename}`;
  const response = await fetch(url, { headers: { "User-Agent": "SimuladorOrbitalSO/1.0 (planetary-map-packaging)", "Accept": "image/*,*/*;q=0.8" } });
  if (!response.ok) throw new Error(`No se pudo descargar el mapa ${filename}: HTTP ${response.status}`);
  const bytes = Buffer.from(await response.arrayBuffer());
  if (!response.headers.get("content-type")?.startsWith("image/") || bytes.length < 1000) throw new Error(`Respuesta inválida para ${filename}: tipo=${response.headers.get("content-type")}, bytes=${bytes.length}, url=${response.url}`);
  await writeFile(resolve(textureDir, filename), bytes);
  console.log(`Mapa incluido: ${filename} (${bytes.length} bytes)`);
}

// Instantánea completa de planetas confirmados del NASA Exoplanet Archive (tabla PSCompPars).
// Se empaqueta junto al simulador para permitir búsquedas sin conexión.
const exoQuery = "select pl_name,hostname,discoverymethod,disc_year,pl_orbper,pl_orbsmax,pl_orbeccen,pl_orbincl,pl_rade,pl_bmasse,pl_eqt,pl_insol,sy_dist,ra,dec,sy_snum,sy_pnum,sy_mnum,st_teff,st_rad,st_mass,st_spectype from pscomppars";
const exoUrl = "https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=" + encodeURIComponent(exoQuery) + "&format=json";
const exoResponse = await fetch(exoUrl, { headers: { "User-Agent": "SimuladorOrbitalSO/1.0 (NASA Exoplanet Archive snapshot)", "Accept": "application/json" } });
if (!exoResponse.ok) throw new Error("NASA Exoplanet Archive no disponible: HTTP " + exoResponse.status);
const exoPayload = await exoResponse.json();
const exoRows = Array.isArray(exoPayload) ? exoPayload : (exoPayload.data || []);
if (!exoRows.length || !exoRows[0].pl_name) throw new Error("El catálogo NASA de exoplanetas llegó vacío o con formato inesperado");
const dataDir = resolve(outDir, "data");
await mkdir(dataDir, { recursive: true });
await writeFile(resolve(dataDir, "exoplanets.json"), JSON.stringify(exoRows), "utf8");
console.log("NASA Exoplanet Archive: " + exoRows.length + " planetas confirmados empaquetados");
const embeddedCatalog = JSON.stringify(exoRows).replace(/</g, "\\u003c");
const offlineHtml = output.replace("</body>", `<script type="application/json" id="exoCatalogData">${embeddedCatalog}</script>\n</body>`);
await writeFile(resolve(outDir, "index.html"), offlineHtml, "utf8");
await writeFile(resolve(outDir, "app.js"), bundled, "utf8");
await copyFile(resolve(root, "README.md"), resolve(outDir, "LEEME.txt"));
await copyFile(resolve(root, "PLAN.md"), resolve(outDir, "PLAN.txt"));
await copyFile(resolve(root, "TEXTURE_CREDITS.md"), resolve(outDir, "FUENTES-TEXTURAS.txt"));
console.log("Paquete autocontenido creado en dist/Simulador-Orbital-SO");
