# Simulador Orbital — SO

Simulador 3D interactivo en desarrollo para explorar el Sistema Solar, misiones espaciales y una representación visual de la Vía Láctea.

## Abrirlo localmente

**ZIP descargable para Chromebook (recomendado):** descarga el artefacto `Simulador-Orbital-SO-Chromebook` de la ejecución más reciente de GitHub Actions, extrae todos sus archivos en la misma carpeta y abre `index.html`. El paquete incluye `app.js` con Three.js incorporado localmente, por lo que la simulación no necesita Internet para cargar el motor 3D. No separes ni borres `app.js`.

**Código fuente del repositorio:** el `index.html` original utiliza un import map de jsDelivr para desarrollar y probar desde la web; abrir ese archivo fuente directamente sí requiere conexión. El ZIP generado por Actions elimina esa dependencia externa.

## Controles

- Arrastrar: rotar la cámara.
- Rueda del ratón: acercar y alejar.
- Botones de planetas: centrar la cámara y consultar datos.
- Botón **Opciones**: desplegar u ocultar los controles para dejar libre la vista.
- Velocidad: cambiar el paso del tiempo simulado.
- Sistema Solar / Vía Láctea: cambiar de escala.
- Misiones espaciales: abrir el catálogo, buscar por nombre/destino y consultar fichas.

## Catálogo de misiones

La primera versión del catálogo incluye 15 misiones seleccionadas de exploración robótica: Voyager 1 y 2, Pioneer 10 y 11, Galileo, Cassini-Huygens, New Horizons, Juno, Mars Reconnaissance Orbiter, Mars Odyssey, Curiosity, Perseverance, MESSENGER, Rosetta/Philae y OSIRIS-REx.

Las fichas muestran datos históricos de lanzamiento, agencia, cohete, destino, hitos, objetivo, resultados y estado descrito. Es un **primer lote**, no un inventario completo de todos los satélites y naves lanzados por la humanidad. Los estados y datos operativos deben revisarse y fecharse con fuentes oficiales antes de considerar el catálogo completo.

## Sistemas extrasolares y galaxias

El catálogo interactivo inicial incluye TRAPPIST-1 (siete planetas confirmados) y Proxima Centauri (Proxima b). Muestra sus periodos orbitales publicados y enlaza las fichas del NASA Exoplanet Archive. Es una muestra pequeña: el archivo de NASA registraba 6.473 planetas confirmados el 19 de noviembre de 2026; el simulador todavía no incorpora ese catálogo completo. No se atribuyen planetas confirmados a las galaxias externas representadas ni lunas confirmadas a estos exoplanetas.

## Recuento de lunas del Sistema Solar

Los recuentos visibles usan cifras de NASA con estas fechas de referencia: Júpiter 115 (abril de 2026), Saturno 293 (agosto de 2026), Urano 29 (agosto de 2026) y Neptuno 16 (2026). El simulador solo representa algunas lunas destacadas y no dibuja todavía el inventario completo ni todas sus órbitas. Consulta la [referencia de NASA sobre lunas](https://science.nasa.gov/solar-system/moons/facts/) y el [NASA Exoplanet Archive](https://exoplanetarchive.ipac.caltech.edu/).

## Publicación web

El flujo de GitHub Actions de `.github/workflows/deploy.yml` publica esta rama en GitHub Pages. En el repositorio, abre **Settings → Pages** y selecciona **GitHub Actions** como método de publicación. Después de una ejecución correcta, GitHub mostrará la URL pública.

## Estado científico y limitaciones

Esta es una primera maqueta funcional, no una efeméride de precisión. Las distancias y radios visuales están comprimidos; las superficies planetarias usan texturas procedurales ilustrativas, no fotografías ni mapas científicos; varias lunas son representaciones ilustrativas; el cinturón de asteroides representa una población enorme mediante puntos; la Vía Láctea tiene una estructura espiral visual esquemática y la curvatura del espacio-tiempo no es un cálculo relativista. El catálogo de misiones no muestra posiciones actuales calculadas ni debe utilizarse para navegación. No debe utilizarse para cálculos astronómicos precisos.

## Próximas mejoras

1. Completar y verificar el catálogo de misiones con fuentes oficiales y cobertura documentada.
2. Sustituir las lunas ilustrativas por un catálogo de satélites naturales con datos verificables.
3. Incorporar datos orbitales y orientación de planos con fuentes verificables.
4. Añadir fichas científicas completas para planetas, planetas enanos y lunas.
5. Eliminar dependencias de Internet y probar un paquete descargable offline en ChromeOS.


Última corrección de cámara: el zoom puede dirigirse al cursor y seleccionar cuerpos para centrar el objetivo.


## Mejoras visuales recientes

Se han mejorado las texturas procedurales de los planetas, la atmósfera y nubes de la Tierra, los anillos de Saturno, el resplandor solar y la densidad visual del campo estelar y de la Vía Láctea. Son recursos gráficos generados localmente para el simulador; no equivalen a mapas de observación científica.


## Navegación y cielo profundo

La cámara admite desplazamiento libre con W/A/S/D y Q/E, rotación con arrastre y zoom con rueda o gesto de pellizco. Se incluyen patrones de estrellas destacados de ocho constelaciones con direcciones J2000 aproximadas, además de un selector con los 88 nombres y abreviaturas oficiales de la UAI. Las otras 80 aparecen en el catálogo, pero no se dibujan hasta incorporar estrellas y límites oficiales verificables. El cinturón principal de Kuiper se representa entre 30 y 50 UA y el disco disperso como una extensión esquemática; sus puntos son una nube visual generada, no objetos reales ni posiciones orbitales medidas. Las galaxias cercanas continúan en posiciones esquemáticas, no como mapa tridimensional a escala. Las texturas de planetas, Sol, galaxias y nubes son ilustraciones procedurales, no imágenes científicas ni datos observados. Los datos científicos y límites de cada representación deben mostrarse claramente para no confundir ilustración con observación.
