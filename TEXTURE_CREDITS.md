# Fuentes y licencia de los mapas planetarios

Los mapas equirectangulares incluidos en el paquete del Simulador Orbital proceden de Solar System Scope. Para que las compilaciones no dependan de que el servidor de descargas original esté disponible, el proceso de empaquetado los obtiene de un espejo versionado de los mismos archivos (commit fijado) en `elymas/solar-simulator`; el README de ese espejo declara expresamente Solar System Scope y CC BY 4.0. El espejo se usa solo como transporte de los mapas, no como fuente de datos astronómicos:

- Catálogo y descargas: https://play.solarsystemscope.com/textures/
- Licencia declarada por el proveedor: Creative Commons Attribution 4.0 International (CC BY 4.0): https://creativecommons.org/licenses/by/4.0/
- Los mapas se basan en datos de elevación e imágenes de NASA y misiones espaciales; el proveedor indica que algunos huecos sin cobertura pueden completarse con terreno ilustrativo y que los colores pueden estar realzados.

Archivos incluidos:
- Mercurio: `2k_mercury.jpg`
- Venus: `2k_venus_surface.jpg` (cartografía de superficie radar; no es una fotografía óptica)
- Tierra: `2k_earth_daymap.jpg` y `2k_earth_clouds.jpg`
- Marte: `2k_mars.jpg`
- Júpiter: `2k_jupiter.jpg` (atmósfera; su aspecto cambia con el tiempo)
- Saturno: `2k_saturn.jpg` y `2k_saturn_ring_alpha.png`
- Urano: `2k_uranus.jpg` (atmósfera)
- Neptuno: `2k_neptune.jpg` (atmósfera)

Los mapas de los gigantes gaseosos son representaciones de la atmósfera, no superficies sólidas ni fotografías simultáneas actuales. La cartografía radar de Venus se colorea para facilitar su lectura. La Tierra usa un mapa global diurno con continentes y océanos reconocibles.

Plutón no se incluye en este lote porque todavía no se ha integrado una textura global con procedencia y licencia verificadas. No se debe presentar la esfera plana de Plutón como un mapa real.
