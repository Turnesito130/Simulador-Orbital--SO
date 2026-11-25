# Simulador Orbital — SO

Simulador 3D interactivo en desarrollo para explorar el Sistema Solar, misiones espaciales y una representación esquemática de la Vía Láctea.

## Abrirlo localmente

Abre `index.html` en un navegador moderno con conexión a Internet. La escena 3D utiliza Three.js desde jsDelivr, por lo que necesita conexión para cargar las bibliotecas. **La versión actual todavía no funciona sin conexión.**

## Controles

- Arrastrar: rotar la cámara.
- Rueda del ratón: acercar y alejar.
- Botones de planetas: centrar la cámara y consultar datos.
- Velocidad: cambiar el paso del tiempo simulado.
- Sistema Solar / Vía Láctea: cambiar de escala.
- Misiones espaciales: abrir el catálogo, buscar por nombre/destino y consultar fichas.

## Catálogo de misiones

La primera versión del catálogo incluye 15 misiones seleccionadas de exploración robótica: Voyager 1 y 2, Pioneer 10 y 11, Galileo, Cassini-Huygens, New Horizons, Juno, Mars Reconnaissance Orbiter, Mars Odyssey, Curiosity, Perseverance, MESSENGER, Rosetta/Philae y OSIRIS-REx.

Las fichas muestran datos históricos de lanzamiento, agencia, cohete, destino, hitos, objetivo, resultados y estado descrito. Es un **primer lote**, no un inventario completo de todos los satélites y naves lanzados por la humanidad. Los estados y datos operativos deben revisarse y fecharse con fuentes oficiales antes de considerar el catálogo completo.

## Publicación web

El flujo de GitHub Actions de `.github/workflows/deploy.yml` publica esta rama en GitHub Pages. En el repositorio, abre **Settings → Pages** y selecciona **GitHub Actions** como método de publicación. Después de una ejecución correcta, GitHub mostrará la URL pública.

## Estado científico y limitaciones

Esta es una primera maqueta funcional, no una efeméride de precisión. Las distancias y radios visuales están comprimidos; varias lunas son representaciones ilustrativas; la Vía Láctea y la curvatura del espacio-tiempo son esquemáticas. El catálogo de misiones no muestra posiciones actuales calculadas ni debe utilizarse para navegación. No debe utilizarse para cálculos astronómicos precisos.

## Próximas mejoras

1. Completar y verificar el catálogo de misiones con fuentes oficiales y cobertura documentada.
2. Sustituir las lunas ilustrativas por un catálogo de satélites naturales con datos verificables.
3. Incorporar datos orbitales y orientación de planos con fuentes verificables.
4. Añadir fichas científicas completas para planetas, planetas enanos y lunas.
5. Eliminar dependencias de Internet y probar un paquete descargable offline en ChromeOS.
