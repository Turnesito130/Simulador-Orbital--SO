import { readFile, mkdir, writeFile, copyFile } from "node:fs/promises";
import { build } from "esbuild";
import { resolve } from "node:path";

const root = process.cwd();
const source = await readFile(resolve(root, "index.html"), "utf8");
const match = source.match(/<script type="module">([\\s\\S]*?)<\\/script>/i);
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
let output = source
  .replace(/<script type="importmap">[\\s\\S]*?<\\/script>\\s*/i, "")
  .replace(match[0], "<script>\\n" + bundled + "\\n</script>");

const outDir = resolve(root, "dist/Simulador-Orbital-SO");
await mkdir(outDir, { recursive: true });
await writeFile(resolve(outDir, "index.html"), output, "utf8");
await copyFile(resolve(root, "README.md"), resolve(outDir, "LEEME.txt"));
await copyFile(resolve(root, "PLAN.md"), resolve(outDir, "PLAN.txt"));
console.log("Paquete autocontenido creado en dist/Simulador-Orbital-SO");
