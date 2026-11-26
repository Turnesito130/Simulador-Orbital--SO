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
for (const filename of textureFiles) {
  const url = `https://play.solarsystemscope.com/textures/download/${filename}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error(`No se pudo descargar el mapa ${filename}: HTTP ${response.status}`);
  const bytes = Buffer.from(await response.arrayBuffer());
  if (bytes.length < 1000) throw new Error(`El mapa ${filename} parece incompleto`);
  await writeFile(resolve(textureDir, filename), bytes);
  console.log(`Mapa incluido: ${filename} (${bytes.length} bytes)`);
}

await writeFile(resolve(outDir, "index.html"), output, "utf8");
await writeFile(resolve(outDir, "app.js"), bundled, "utf8");
await copyFile(resolve(root, "README.md"), resolve(outDir, "LEEME.txt"));
await copyFile(resolve(root, "PLAN.md"), resolve(outDir, "PLAN.txt"));
await copyFile(resolve(root, "TEXTURE_CREDITS.md"), resolve(outDir, "FUENTES-TEXTURAS.txt"));
console.log("Paquete autocontenido creado en dist/Simulador-Orbital-SO");
