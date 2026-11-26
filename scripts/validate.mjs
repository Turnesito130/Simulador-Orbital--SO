import assert from 'node:assert/strict';
import { readFileSync, writeFileSync, mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';

const root = fileURLToPath(new URL('../', import.meta.url));
const html = readFileSync(join(root, 'index.html'), 'utf8');
assert.match(html, /<!doctype html/i, 'index.html debe declarar HTML5');

const ids = [...html.matchAll(/\bid=["']([^"']+)["']/g)].map(m => m[1]);
const duplicates = ids.filter((id, i) => ids.indexOf(id) !== i);
assert.deepEqual([...new Set(duplicates)], [], 'No debe haber IDs HTML duplicados');

const requiredIds = [
  'scene', 'info', 'stellarNav', 'stellarPicker', 'stellarPrev',
  'stellarNext', 'stellarExit', 'stellarEnter', 'galaxyLegend',
  'gravityLab', 'closeGravity', 'exoModal', 'exoGrid', 'exoDetail',
  'missionModal', 'missionGrid', 'missionDetail'
];
for (const id of requiredIds) {
  assert.ok(ids.includes(id), `Falta el elemento obligatorio #${id}`);
}

const scripts = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)];
const main = scripts.find(m => /type=["']module["']/.test(m[1]));
assert.ok(main, 'Debe existir el módulo JavaScript principal');
assert.match(main[2], /function setMode\(m,preserveView=false\)/, 'Debe existir el cambio de vista conservando cámara');
assert.match(main[2], /setMode\('galaxy',true\)/, 'El zoom hacia la galaxia debe conservar el encuadre');
assert.match(main[2], /setMode\('solar',true\)/, 'El regreso al Sistema Solar debe conservar el encuadre');
assert.match(main[2], /stellarSystemData\.forEach\(\(item,i\)/, 'El selector debe poblarse desde los sistemas definidos');
assert.match(main[2], /function clearStellarSystem\(\)[\s\S]*?geometry\.dispose\(\)/, 'Al cambiar de sistema deben liberarse las geometrías de GPU');
assert.match(main[2], /material\.dispose\(\)/, 'Al cambiar de sistema deben liberarse los materiales de GPU');
assert.match(main[2], /stellarIndex=\(\(index%stellarSystemData\.length\)\+stellarSystemData\.length\)%stellarSystemData\.length/, 'La navegación circular debe admitir índices negativos y positivos');
assert.match(main[2], /mode==='stellar'&&\(k==='arrowleft'\|\|k==='arrowright'\)/, 'Las flechas deben permitir cambiar de sistema directamente');
assert.ok((main[2].match(/\{name:/g)||[]).length >= 9, 'Debe haber datos para los nueve sistemas estelares');


const tempDir = mkdtempSync(join(tmpdir(), 'so-check-'));
try {
  const modulePath = join(tempDir, 'main.mjs');
  writeFileSync(modulePath, main[2], 'utf8');
  execFileSync(process.execPath, ['--check', modulePath], { stdio: 'pipe' });
} finally {
  rmSync(tempDir, { recursive: true, force: true });
}

console.log('SO checks passed: HTML5, unique IDs, required UI, navigation transitions and JavaScript syntax.');
