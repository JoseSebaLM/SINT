# Firma de correo Sint · cómo instalarla en Zoho Mail

## Archivos

| Archivo | Qué es |
| --- | --- |
| `sint-email-signature.html` | Firma principal: logo a la izquierda y datos a la derecha |
| `sint-email-signature-simple.html` | Variante simplificada: una columna, logo pequeño |
| `sint-email-signature-preview.png` | Vista previa de la principal |
| `comparacion-escritorio.png` · `comparacion-celular.png` | Las dos variantes lado a lado |

El logo vive en `https://sint.cl/firma/sint-logo.png` (archivo `public/firma/sint-logo.png`).
Es el logo del sitio (`sint` en JetBrains Mono con el guion naranja `#FF6B4A`), en PNG a 3x
para que se vea nítido. Tiene un borde blanco casi invisible para que se lea en modo oscuro.

**Antes de instalarla, el logo debe estar en producción** (sint.cl). Si `https://sint.cl/firma/sint-logo.png`
no abre, la firma mostrará el texto `sint_` en lugar del logo.

## Pasos en Zoho Mail (navegador)

1. Abre el archivo HTML de la firma con un editor de texto y copia todo su contenido.
2. En Zoho Mail, haz clic en el engranaje (Configuración) → **Firma**.
3. Crea una firma nueva. Ponle un nombre, por ejemplo "Sint".
4. En la barra del editor, busca **Insertar HTML** (ícono `</>` o en el menú `…`).
5. Pega el código y confirma con **Insertar**.
6. Asigna la firma a `jose@sint.cl` y guarda.
7. Envíate un correo de prueba a Gmail y ábrelo en el computador y en el celular.

## Para cambiar algo

- Textos y colores están en el HTML, con estilos en línea.
- Si cambias el logo, reemplaza `public/firma/sint-logo.png` con el mismo nombre. Así las firmas ya instaladas se actualizan solas.
