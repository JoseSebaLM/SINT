# SINT - Logo V1

## Descripción General del Proyecto

Este es un proyecto simple y estático que consiste en una única página HTML para mostrar el logo de "sint". El diseño presenta un estilo minimalista tipo terminal/código con un cursor parpadeante.

### Características Principales

- **Logo visual**: Muestra el texto "sint" seguido de un cursor parpadeante (`_`)
- **Estilo terminal**: Utiliza la fuente JetBrains Mono para evocar una sensación de código/terminal
- **Animación CSS**: El cursor tiene una animación de parpadeo suave con transiciones de opacidad
- **Diseño responsive**: Centrado vertical y horizontalmente en la viewport

## Estructura del Proyecto

```
SINT/
├── logosint.html    # Único archivo del proyecto (página HTML completa)
└── AGENTS.md        # Este archivo
```

## Tecnologías Utilizadas

| Tecnología | Uso |
|------------|-----|
| HTML5      | Estructura de la página |
| CSS3       | Estilos y animaciones |
| Google Fonts | Fuente JetBrains Mono |

## Paleta de Colores

| Elemento | Color | Código HEX |
|----------|-------|------------|
| Fondo | Deep Zinc | `#09090B` |
| Texto (sint) | Off-White | `#E5E6EB` |
| Cursor | Flux Orange | `#FF6B4A` |

## Especificaciones de Tipografía

- **Fuente**: JetBrains Mono (monospace)
- **Peso**: 500 (Medium)
- **Tamaño**: 3rem (~48px)
- **Tracking (letter-spacing)**: -0.03em (compacto)
- **Line-height**: 1

## Animaciones

### Cursor Parpadeante

```css
@keyframes blink-cursor {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.2; }
}
```

- **Duración**: 1.2 segundos
- **Timing**: ease-in-out
- **Iteración**: infinita
- **Efecto**: El cursor nunca desaparece completamente (mínimo 20% opacidad) para un efecto más orgánico

## Cómo Usar

### Visualización Local

Simplemente abre el archivo `logosint.html` en cualquier navegador web moderno:

```bash
# En Windows
start logosint.html

# O arrastra el archivo a una ventana del navegador
```

No se requiere servidor web ni proceso de construcción (build).

### Integración en Otros Proyectos

Para usar este logo en otro proyecto:

1. Copia el contenido del `<style>` al CSS de tu proyecto
2. Copia el HTML del logo:
   ```html
   <div class="logo-container" aria-label="sint logo">
     <span class="logo-text">sint</span><span class="logo-cursor">_</span>
   </div>
   ```
3. Asegúrate de incluir la fuente JetBrains Mono desde Google Fonts

## Convenciones de Código

### CSS

- Uso de clases BEM-like (`.logo-container`, `.logo-text`, `.logo-cursor`)
- Colores definidos con comentarios descriptivos
- Propiedades organizadas de forma lógica (layout → tipografía → color → animación)

### HTML

- Estructura semántica con etiquetas apropiadas
- Atributo `aria-label` para accesibilidad
- Meta tags para viewport y charset

## Notas de Desarrollo

- Este es un proyecto **estático** - no requiere build, compilación ni dependencias
- No hay pruebas automatizadas (testing) configuradas
- No hay proceso de despliegue (deployment) - puede servirse desde cualquier servidor web estático o CDN
- El proyecto está diseñado para ser autocontenido y funciona offline una vez cargada la fuente

## Compatibilidad

- **Navegadores soportados**: Todos los navegadores modernos (Chrome, Firefox, Safari, Edge)
- **Requisitos**: Soporte CSS para `@keyframes` y `animation`
- **Responsive**: Sí, se adapta a cualquier tamaño de pantalla

## Historial de Versiones

- **V1**: Versión inicial con logo "sint" y cursor animado
