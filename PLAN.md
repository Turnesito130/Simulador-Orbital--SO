# Simulador Orbital (SO) — hoja de ruta

## Objetivo

Crear un simulador astronómico interactivo que pueda descargarse como ZIP desde GitHub, extraerse en ChromeOS y ejecutarse sin conexión a Internet.

## Requisitos principales

1. **Ejecución sin conexión**
   - No depender de CDN, fuentes, scripts, imágenes ni APIs remotas durante el uso.
   - Incluir localmente el motor 3D, los datos y los recursos necesarios.
   - Ofrecer una entrada sencilla para ChromeOS (idealmente una aplicación web local/PWA empaquetada y probada en ChromeOS).
   - Probar el funcionamiento desde archivos locales y documentar cualquier limitación real de ChromeOS.

2. **Sistema Solar**
   - Sol, ocho planetas, Plutón y otros planetas enanos cuando haya datos.
   - Órbitas, periodos, distancias, inclinaciones, lunas y cinturón de asteroides.
   - Escalas visuales ajustables, sin confundir escalas ilustrativas con distancias físicas.

3. **Otros sistemas planetarios de la Vía Láctea**
   - Catálogo local de sistemas con exoplanetas confirmados y sus estrellas anfitrionas.
   - Buscar por nombre de estrella, planeta o sistema.
   - Viajar desde la vista galáctica a una estrella y explorar su sistema.
   - Mostrar la fuente y fecha de actualización de cada conjunto de datos.
   - Distinguir claramente detecciones confirmadas, candidatos y valores estimados.
   - No inventar órbitas, atmósferas, temperaturas ni lunas cuando no se conozcan.

4. **Ficha científica interactiva**
   - Al seleccionar un planeta: masa, radio, gravedad, temperatura, periodo, distancia orbital y estrella anfitriona, cuando existan.
   - Atmósfera y composición solo cuando haya mediciones o estimaciones publicadas; indicar incertidumbre.
   - Lunas, anillos, descubrimiento y referencias científicas cuando estén disponibles.
   - Mostrar «desconocido» cuando no haya datos fiables.

5. **Exploración y simulación**
   - Cámara libre, zoom, selección de cuerpos y seguimiento.
   - Control del tiempo, pausa y velocidad.
   - Vista de sistema planetario y vista de la Vía Láctea.
   - La representación de la galaxia y los sistemas lejanos debe indicar cuándo es esquemática o no está a escala.

6. **Naves, sondas y misiones espaciales humanas**
   - Crear un catálogo de objetos y misiones espaciales reales, no limitarse a planetas y lunas.
   - Incluir las sondas interplanetarias y de espacio profundo, orbitadores, módulos de aterrizaje, rovers, impactadores, muestras de retorno, observatorios/telescopios espaciales y otras naves científicas enviadas a explorar el Sistema Solar.
   - Incluir misiones activas, terminadas, perdidas, fallidas y naves ya apagadas; indicar claramente su estado y la fecha de referencia.
   - Registrar, cuando se conozcan: nombre oficial, agencia/país, fecha de lanzamiento, cohete, objetivo, fecha de llegada o sobrevuelo, trayectoria, cuerpo visitado, función, descubrimientos, duración prevista/real, estado, fecha de fin y fuentes.
   - Distinguir una nave espacial de un satélite natural, un satélite artificial en órbita terrestre y una sonda que viaja por el espacio interplanetario.
   - Permitir seleccionar una nave en el mapa y abrir su ficha; mostrar su trayectoria o posición solo cuando existan datos orbitales/efemérides fiables. Si la posición es histórica, indicar la fecha. No fingir posiciones en tiempo real.
   - Incluir las Voyager 1 y 2, Pioneer, New Horizons, Galileo, Cassini-Huygens, Juno, las misiones a Marte, Mercurio, Venus, cometas, asteroides y otros destinos, además de las que se incorporen desde catálogos verificables.
   - Para cada misión explicar en lenguaje claro qué hace/hizo y qué descubrió, con enlaces o referencias a la fuente original.
   - No inventar datos ausentes: mostrar «desconocido» o «no publicado».
   - El catálogo debe tener un criterio explícito y auditable. La prioridad inicial es cubrir las misiones robóticas científicas del Sistema Solar y espacio profundo; las constelaciones masivas de satélites de comunicaciones, navegación y observación terrestre se tratarán como una categoría separada, porque no son todas misiones de exploración planetaria y su inventario cambia continuamente.
   - No prometer «todos los objetos lanzados al espacio» sin delimitar el catálogo: se documentará qué clases, periodos y fuentes están cubiertos y qué queda fuera.

## Plan de desarrollo

### Fase 1 — Base realmente offline en ChromeOS
- Eliminar dependencias de CDN.
- Empaquetar el motor 3D y recursos.
- Crear estructura de datos local.
- Probar en un Chromebook real, incluyendo apertura sin conexión.
- Preparar ZIP descargable y guía de uso.

### Fase 2 — Sistema Solar científico
- Completar datos orbitales y físicos.
- Mejorar lunas y cuerpos menores.
- Añadir fichas detalladas y fuentes.

### Fase 3 — Catálogo de sondas y misiones
- Definir un esquema de datos común para naves, instrumentos, eventos y trayectorias.
- Incorporar un primer catálogo verificable de misiones robóticas y de espacio profundo.
- Añadir fichas con lanzamiento, agencia, objetivo, función, hitos, descubrimientos y estado.
- Incorporar posiciones/órbitas únicamente desde efemérides o fuentes fiables, con fecha y precisión.
- Añadir filtros por destino, agencia, década, tipo de misión y estado.

### Fase 4 — Catálogo de exoplanetas
- Incorporar una instantánea local de un catálogo astronómico reconocido.
- Normalizar sistemas, estrellas y planetas.
- Añadir búsqueda y filtros.
- Mantener los datos utilizables sin Internet; las actualizaciones se descargarán solo cuando el usuario quiera una nueva versión.

### Fase 5 — Navegación galáctica y cielo estrellado
- Mapa 3D de la Vía Láctea con posiciones y precisión documentadas.
- Selección de estrellas y salto a sistemas.
- Órbitas de exoplanetas cuando los parámetros publicados permitan calcularlas.
- Catálogo estelar local con magnitud, coordenadas, distancia e identificadores.
- Incluir las 88 constelaciones oficiales de la Unión Astronómica Internacional y sus límites oficiales.
- Hover en estrellas para mostrar nombre/ID y constelación; clic para abrir ficha de estrella o constelación.
- Líneas de constelación como convención visual, diferenciadas de los límites oficiales.
- Catálogo por niveles: paquete básico manejable y paquetes opcionales grandes; no intentar incluir los 1.800 millones de fuentes Gaia en el ZIP básico.

### Fase 6 — Validación
- Pruebas en ChromeOS y en modo avión.
- Verificación de controles, selección, fichas y rendimiento.
- Contrastar los datos de misiones y astronomía con fuentes primarias.
- No marcar una función como terminada hasta probarla.

## Principios científicos

- Los sistemas planetarios conocidos no equivalen a todos los sistemas que existen en la Vía Láctea: la mayoría aún no se han descubierto.
- No todos los exoplanetas tienen temperatura, atmósfera, composición o lunas conocidas.
- Una órbita calculada con parámetros incompletos debe marcarse como aproximada.
- Las escalas visuales pueden comprimirse para facilitar la exploración, pero deben estar identificadas.
- Cada conjunto de datos debe conservar fuente, fecha y nivel de confianza.
- En misiones espaciales, separar hechos históricos, estado operativo y posición calculada para una fecha concreta.
- Una ficha vacía o incompleta es preferible a rellenar campos con cifras inventadas.

## Estado inicial

La rama de desarrollo contiene un primer prototipo visual. Todavía depende de Three.js desde Internet y sus datos son parciales y esquemáticos. Por tanto, **todavía no cumple el requisito de uso sin conexión ni debe considerarse una versión científica completa**.
