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

El catálogo se alimenta de la tabla PSCompPars del NASA Exoplanet Archive: el flujo de compilación descarga todos los planetas confirmados y los empaqueta en `data/exoplanets.json`, de modo que la búsqueda funciona sin conexión. Se agrupan por estrella anfitriona y se muestran periodo orbital, semieje mayor, radio y masa cuando están publicados. El total cambia con las actualizaciones de NASA. La galaxia anfitriona no se inventa: la clasificación de trabajo de sistemas catalogados es Vía Láctea y no equivale a disponer de una posición galáctica precisa. No se muestran candidatos como confirmados ni se asignan exoplanetas a galaxias externas sin evidencia sólida. Las posiciones orbitales actuales no se simulan a partir de estos parámetros.

## Recuento de lunas del Sistema Solar

Los recuentos visibles usan cifras de NASA con estas fechas de referencia: Júpiter 115 (abril de 2026), Saturno 293 (agosto de 2026), Urano 29 (agosto de 2026) y Neptuno 16 (2026). El simulador solo representa algunas lunas destacadas y no dibuja todavía el inventario completo ni todas sus órbitas. Consulta la [referencia de NASA sobre lunas](https://science.nasa.gov/solar-system/moons/facts/) y el [NASA Exoplanet Archive](https://exoplanetarchive.ipac.caltech.edu/).

## Publicación web

GitHub Pages publica esta rama mediante el flujo de Pages que GitHub activa al seleccionar **Settings → Pages → GitHub Actions**. Se mantiene un único método automático de publicación para evitar dos despliegues simultáneos del mismo artefacto. Tras una ejecución correcta, GitHub muestra la URL pública.

## Estado científico y limitaciones

Esta es una primera maqueta funcional, no una efeméride de precisión. Las distancias y radios visuales están comprimidos; las superficies de los ocho planetas principales usan mapas equirectangulares reales compilados a partir de datos de observación y misiones espaciales; los mapas de gigantes gaseosos representan atmósferas variables, no una superficie sólida; varias lunas son representaciones ilustrativas; el cinturón de asteroides representa una población enorme mediante puntos; la Vía Láctea tiene una estructura espiral visual esquemática y la curvatura del espacio-tiempo no es un cálculo relativista. El catálogo de misiones no muestra posiciones actuales calculadas ni debe utilizarse para navegación. No debe utilizarse para cálculos astronómicos precisos.

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

La cámara admite desplazamiento libre con W/A/S/D y Q/E, rotación con arrastre y zoom con rueda o gesto de pellizco. Se incluyen patrones de estrellas destacados de ocho constelaciones con direcciones J2000 aproximadas, además de un selector con los 88 nombres y abreviaturas oficiales de la UAI. Las otras 80 aparecen en el catálogo, pero no se dibujan hasta incorporar estrellas y límites oficiales verificables. El cinturón principal de Kuiper se representa entre 30 y 50 UA y el disco disperso como una extensión esquemática; sus puntos son una nube visual generada, no objetos reales ni posiciones orbitales medidas. Las galaxias cercanas continúan en posiciones esquemáticas, no como mapa tridimensional a escala. Los planetas principales avanzan ahora por órbitas elípticas calculadas con la ecuación de Kepler, usando excentricidades e inclinaciones orbitales medias aproximadas; los semiejes y distancias siguen comprimidos para que quepan en la escena, y no se incluyen perturbaciones entre planetas ni efemérides de precisión. Los ocho planetas principales usan mapas planetarios de Solar System Scope (licencia CC BY 4.0), basados en datos e imágenes de misiones y observatorios. Sus mapas advierten que algunas zonas no observadas pueden estar completadas visualmente; Venus muestra cartografía radar coloreada y los gigantes gaseosos son mosaicos atmosféricos representativos. Plutón todavía no tiene un mapa real integrado y no se debe confundir su esfera de color uniforme con una superficie cartografiada. Los datos científicos y límites de cada representación deben mostrarse claramente para no confundir ilustración con observación.


## Última actualización de interfaz y exploración

- Menú compacto circular en la esquina superior izquierda; se retiran la cabecera ancha y la barra inferior.
- Al pasar el cursor por los planetas se muestran diámetro, lunas conocidas, temperatura representativa, composición y masa. En gigantes gaseosos la temperatura indicada corresponde a la capa de nubes, no a una superficie sólida.
- Se muestran marcadores esquemáticos de algunos satélites artificiales terrestres (ISS, Hubble, GPS y otros) y de Voyager 1. Sus órbitas y posiciones son ilustrativas: no son efemérides ni seguimiento en directo.
- Las lunas representadas de Saturno se sitúan fuera del borde exterior de los anillos para evitar que sus órbitas los atraviesen visualmente.
- La densidad estelar de la representación de la Vía Láctea se ha incrementado. Sigue siendo una visualización procedural, no un mapa de posiciones estelares medido.
- El modo **Tiempo real** hace avanzar el reloj orbital a un segundo simulado por segundo real. No sincroniza posiciones de sondas ni satélites con telemetría externa.


## Mapas reales de los planetas

El simulador aplica mapas equirectangulares a Mercurio, Venus, Tierra, Marte, Júpiter, Saturno, Urano y Neptuno. La Tierra incluye una capa de nubes basada en cartografía de nubes y Saturno una textura de anillos. En la web se intentan cargar desde Solar System Scope; el ZIP de Chromebook descarga y empaqueta los mismos recursos en `assets/textures/` para que se puedan usar sin conexión. Consulta `TEXTURE_CREDITS.md` para las fuentes, licencia y limitaciones. Plutón queda pendiente de una cartografía global adecuada.


## Laboratorio gravitacional (experimental)

La vista incluye un laboratorio independiente para crear cuerpos con masa (en masas terrestres), radio (km), posición (miles de km) y velocidad inicial (km/s). La interacción entre cuerpos se integra numéricamente con gravedad newtoniana de N cuerpos y un esquema leapfrog. Incluye escenarios de Tierra-Luna, dos masas iguales y colisión, además de una cuadrícula de potencial gravitatorio para explicar visualmente los pozos de gravedad.

**Límites científicos:** la cuadrícula es una analogía visual del potencial newtoniano, no una solución de las ecuaciones de Einstein ni una representación métrica relativista exacta. Cuando dos cuerpos se solapan, el laboratorio los fusiona conservando masa y momento lineal; no calcula deformaciones, mareas, fragmentación ni rebotes. No incluye relatividad general. Las dimensiones visuales se amplían para que los cuerpos se puedan ver. Las órbitas de los asteroides del cinturón son aproximadas y no son efemérides JPL individuales.

**Diagnósticos añadidos:** el panel calcula la energía mecánica newtoniana (cinética más potencial) y el módulo del momento lineal total a partir de las masas, posiciones y velocidades de la simulación. Son magnitudes del modelo simplificado; la energía no se conserva durante las fusiones inelásticas representadas. Para evitar que el cálculo de las estelas ralentice el navegador, estas se actualizan una vez por fotograma y no en cada subpaso del integrador. El laboratorio limita el número de cuerpos a 24 para mantener razonable el coste de la interacción gravitatoria N-cuerpos en equipos modestos. La cuadrícula del potencial se recalcula periódicamente mientras los cuerpos se mueven para que el pozo gravitatorio acompañe sus posiciones. El paso temporal se adapta a la separación y velocidad relativa de cada pareja; si se alcanza el límite de subpasos por fotograma, el panel avisa de que conviene reducir la velocidad.

Los satélites artificiales de ejemplo se representan con geometría 3D (bus, antena y paneles solares). Algunas lunas destacadas tienen modelos 3D y nombre. Se incluyen modelos 3D identificados de Ceres, Vesta, Pallas, Hygiea, Bennu, Ryugu, 67P y Halley; el cinturón adicional usa rocas procedurales de aspecto irregular, no asteroides individualmente catalogados. El catálogo completo de cientos de satélites naturales y millones de pequeños cuerpos requiere integrar catálogos y efemérides JPL/Horizons, y no se presenta como completado en esta versión.

Referencias para la siguiente ampliación del catálogo: [JPL Solar System Dynamics](https://ssd.jpl.nasa.gov/), [JPL Horizons](https://ssd.jpl.nasa.gov/horizons/manual.html) y [NASA Eyes on the Solar System](https://science.nasa.gov/eyes/). JPL publica catálogos de cuerpos y efemérides; las posiciones exactas deben obtenerse para una fecha concreta, no inferirse de los dibujos orbitales simplificados.
