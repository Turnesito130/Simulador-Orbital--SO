# Simulador Orbital — SO

Simulador 3D interactivo en desarrollo para explorar el Sistema Solar y una representación esquemática de la Vía Láctea.

## Abrirlo localmente

Abre `index.html` en un navegador moderno con conexión a Internet. La escena 3D utiliza Three.js desde jsDelivr, por lo que necesita conexión para cargar las bibliotecas.

## Controles

- Arrastrar: rotar la cámara.
- Rueda del ratón: acercar y alejar.
- Botones de planetas: centrar la cámara y consultar datos.
- Velocidad: cambiar el paso del tiempo simulado.
- Sistema Solar / Vía Láctea: cambiar de escala.

## Publicación web

El flujo de GitHub Actions de `.github/workflows/deploy.yml` publica esta rama en GitHub Pages. En el repositorio, abre **Settings → Pages** y selecciona **GitHub Actions** como método de publicación. Después de una ejecución correcta, GitHub mostrará la URL pública.

## Estado científico

Esta es una primera maqueta funcional, no una efeméride de precisión. Las distancias y radios visuales están comprimidos; varias lunas son representaciones ilustrativas; la Vía Láctea y la curvatura del espacio-tiempo son esquemáticas. No debe utilizarse para navegación ni cálculos astronómicos precisos.

## Próximas mejoras

1. Probar y corregir la ejecución en navegador y móvil.
2. Incorporar datos orbitales y orientación de planos con fuentes verificables.
3. Mejorar las lunas y sus periodos.
4. Añadir escalas coherentes y transición entre escalas planetaria y galáctica.
5. Añadir documentación y pruebas automatizadas.
