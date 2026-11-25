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

### Fase 3 — Catálogo de exoplanetas
- Incorporar una instantánea local de un catálogo astronómico reconocido.
- Normalizar sistemas, estrellas y planetas.
- Añadir búsqueda y filtros.
- Mantener los datos utilizables sin Internet; las actualizaciones se descargarán solo cuando el usuario quiera una nueva versión.

### Fase 4 — Navegación galáctica
- Mapa 3D de la Vía Láctea con posiciones y precisión documentadas.
- Selección de estrellas y salto a sistemas.
- Órbitas de exoplanetas cuando los parámetros publicados permitan calcularlas.

### Fase 5 — Validación
- Pruebas en ChromeOS y en modo avión.
- Verificación de controles, selección, fichas y rendimiento.
- No marcar una función como terminada hasta probarla.

## Principios científicos

- Los sistemas planetarios conocidos no equivalen a todos los sistemas que existen en la Vía Láctea: la mayoría aún no se han descubierto.
- No todos los exoplanetas tienen temperatura, atmósfera, composición o lunas conocidas.
- Una órbita calculada con parámetros incompletos debe marcarse como aproximada.
- Las escalas visuales pueden comprimirse para facilitar la exploración, pero deben estar identificadas.
- Cada conjunto de datos debe conservar fuente, fecha y nivel de confianza.


## 6. Cielo estrellado real y constelaciones

- Incorporar un catálogo astronómico local de estrellas reales con identificadores, coordenadas celestes, magnitud y distancia cuando estén disponibles.
- Usar un catálogo estelar reconocido (por ejemplo, Gaia para astrometría y un catálogo práctico derivado para la distribución local); conservar atribución, versión y licencia.
- Representar las posiciones en 3D cuando exista distancia fiable; si solo hay posición angular, situar la estrella en una esfera celeste y marcar que su profundidad no es conocida.
- Incluir las 88 constelaciones oficiales reconocidas por la Unión Astronómica Internacional y sus límites oficiales.
- Al pasar el cursor por una estrella: mostrar nombre o identificador, magnitud, distancia y constelación asociada, si esos datos existen.
- Al hacer clic en una estrella: abrir su ficha con los datos conocidos y permitir consultar la constelación.
- Al hacer clic en una constelación: mostrar nombre, abreviatura, zona del cielo, estrellas principales, objetos destacados y descripción.
- Dibujar líneas de constelación solo como convención visual, diferenciándolas de los límites oficiales.
- Diseñar el catálogo por niveles: incluir en el ZIP inicial un conjunto estelar manejable y útil sin Internet; permitir paquetes de datos adicionales para catálogos mucho mayores. No intentar incluir los 1.800 millones de fuentes Gaia en el ZIP básico.
- Permitir que SO muestre solo estrellas reales del catálogo cargado; no generar estrellas aleatorias que puedan confundirse con datos científicos.

### Datos y límites del catálogo estelar

Gaia DR3 contiene más de 1.8 mil millones de fuentes, por lo que descargarlo entero no es práctico para el paquete básico de ChromeOS. Se usará un catálogo local optimizado y se documentará su límite de magnitud/número de estrellas. El diseño permitirá ampliar el catálogo con paquetes adicionales sin conexión.

## Estado inicial

La rama de desarrollo contiene un primer prototipo visual. Todavía depende de Three.js desde Internet y sus datos son parciales y esquemáticos. Por tanto, **todavía no cumple el requisito de uso sin conexión ni debe considerarse una versión científica completa**.
