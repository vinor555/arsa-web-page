# ARSA · Sitio web

Landing informativa de ARSA, empresa guatemalteca de ingeniería y servicios para el
manejo de hidrocarburos. Construida para crecer: hoy es una sola página pública,
pero la estructura ya contempla más páginas, autenticación y un panel administrativo.

## Stack

| Pieza | Elección |
| --- | --- |
| Framework | React 19 |
| Bundler | Vite 6 |
| Lenguaje | TypeScript (modo estricto) |
| Estilos | Tailwind CSS v4 |
| Ruteo | React Router 7 |
| Iconos | lucide-react |
| Despliegue | GitHub Pages vía GitHub Actions |

Los colores, tipografías y sombras viven como *design tokens* en
`src/styles/index.css`. Cambiar la marca es cambiar ese archivo.

## Marca

El logo original venía en JPEG sobre fondo negro. De ahí se extrajeron dos
piezas con transparencia, que son las que usa el componente `Logo`:

- `src/assets/logo-marca.png` — el isotipo, la A con el trazo.
- `src/assets/logo-arsa.png` — la palabra ARSA.
- `public/favicon.png` y `public/apple-touch-icon.png` — el isotipo sobre el
  azul institucional.

El logo es plateado, así que pide fondo oscuro. Por eso el encabezado se oscurece
al desplazarse en lugar de volverse blanco, y el menú móvil es oscuro. Si alguna
vez hace falta ponerlo sobre fondo claro, `Logo` acepta `onDark={false}` y le
aplica un filtro que lo oscurece para que no se pierda.

Los colores, tipografías y sombras siguen siendo los del sitio, no los del logo:
el naranja de seguridad se mantiene como color de acento.

## Arranque

```bash
npm install
npm run dev
```

| Script | Qué hace |
| --- | --- |
| `npm run dev` | Servidor de desarrollo en http://localhost:5173 |
| `npm run build` | Build de producción en `dist/` |
| `npm run preview` | Sirve el build tal como queda publicado |
| `npm run lint` | ESLint sobre todo el proyecto |
| `npm run typecheck` | Verificación de tipos sin emitir |

## Atomic Design

```
src/components/
├── atoms/       Button, Container, Section, Badge, Logo, campos de formulario
├── molecules/   ServiceCard, ProductCard, ProjectTile, Lightbox, CategoryFilter,
│                ContactForm, SectionHeading, WhatsAppFab
├── organisms/   Header, Hero, About, Services, Products, Projects, Sectors,
│                Process, Contact, Footer
└── templates/   MainLayout (encabezado + contenido + pie + botón flotante)
src/pages/       HomePage, NotFoundPage
```

La regla: un nivel solo importa de niveles inferiores. Cada carpeta exporta a
través de su `index.ts`, y todo se importa con el alias `@/`.

## Dónde se edita el contenido

Nada de texto vive dentro de los componentes de página. Todo sale de `src/data/`:

- `site.ts` — nombre, descripción, correo, teléfono, WhatsApp y sus mensajes.
- `services.ts` — el catálogo de servicios y sus categorías.
- `products.ts` — los productos a la venta, con su foto.
- `projects.ts` — las fotos de la galería de proyectos y sus títulos.
- `company.ts` — cifras, diferenciadores, sectores, pasos del proceso y normas.
- `navigation.ts` — enlaces del menú.

Para agregar un servicio basta con añadir un objeto a `services`. El conteo de la
portada y del título, los filtros y el selector del formulario se actualizan
solos. Lo mismo vale para `products`.

## Fotos

Las fotos originales son de trabajos reales de ARSA. Para la web se convirtieron
a WebP, se redujeron de tamaño y se les quitaron los metadatos, incluida
cualquier ubicación GPS.

| Carpeta | Uso |
| --- | --- |
| `src/assets/proyectos/` | Galería. Cada foto va en dos versiones: `<slug>-mini.webp`, recortada a 4:3 y de 800 px, y `<slug>.webp`, completa y de hasta 1600 px, que se ve al ampliarla. |
| `src/assets/nosotros/` | Las dos fotos del mosaico de la sección Nosotros. |
| `src/assets/productos/` | Fotos de producto sobre fondo blanco. |

Para sumar una foto a la galería se guardan sus dos versiones en
`src/assets/proyectos/` y se agrega una entrada en `src/data/projects.ts` con el
mismo slug. Si falta alguna de las dos, el build falla con un mensaje que dice
cuál.

## WhatsApp

WhatsApp tiene su propio número, distinto del teléfono para llamadas. Se define
una sola vez en `site.contact.whatsappE164`, y el teléfono en
`site.contact.phoneE164`. La función `whatsappUrl(mensaje)` arma el enlace
`wa.me` con el texto ya codificado. Se usa en el encabezado, el hero, la banda de
conversión, cada tarjeta de servicio y de producto (con su nombre precargado), el
formulario y el botón flotante.

El formulario no envía a ningún servidor: redacta el mensaje y lo entrega por
WhatsApp o por correo, según elija el visitante. Es lo que corresponde a un sitio
estático. Cuando exista backend, se reemplaza el `handleSubmit` de
`src/components/molecules/ContactForm.tsx`.

## Despliegue en GitHub Pages

El workflow `.github/workflows/deploy.yml` corre en cada push a `main`: lint,
verificación de tipos, build y publicación.

Configuración necesaria, una sola vez, en el repositorio:

**Settings → Pages → Build and deployment → Source: GitHub Actions**

El sitio queda en `https://<usuario>.github.io/<repositorio>/`.

### Dominio propio

El sitio se sirve en `https://arsagroup.com.gt/`. Dos piezas lo sostienen:

- `public/CNAME` contiene el dominio y GitHub Pages lo lee en cada despliegue.
- El workflow fija `VITE_BASE: /`, porque con dominio propio el sitio vive en la
  raíz y no dentro de una subcarpeta.

Si alguna vez se vuelve a publicar sin dominio propio, hay que borrar
`public/CNAME` y devolver `VITE_BASE` a `/${{ github.event.repository.name }}/`.

### DNS del dominio

En el Zone Editor de cPanel (nameservers de GuateCloud):

| Nombre | Tipo | Valor |
| --- | --- | --- |
| `arsagroup.com.gt.` | A | `185.199.108.153` |
| `arsagroup.com.gt.` | A | `185.199.109.153` |
| `arsagroup.com.gt.` | A | `185.199.110.153` |
| `arsagroup.com.gt.` | A | `185.199.111.153` |
| `www.arsagroup.com.gt.` | CNAME | `vinor555.github.io` |

**El correo depende del registro A del dominio raíz.** El MX apunta a
`arsagroup.com.gt`, así que antes de mover ese registro A hay que redirigir el
MX a `mail.arsagroup.com.gt` y dejar ese nombre como registro A hacia
`69.72.244.14`, que es el servidor de correo del hosting anterior. Si se cambia
el A sin hacer eso primero, el correo del dominio deja de llegar.

### Rutas profundas

GitHub Pages no reescribe rutas hacia `index.html`, así que el build publica una
copia como `404.html` para que el router del cliente resuelva las URLs cuando
existan más páginas.

## Siguientes pasos previstos

El router ya está montado en `src/App.tsx`, así que una página nueva es una
`<Route>` más. Para el panel administrativo con roles conviene:

1. Crear `src/components/templates/AdminLayout.tsx` para su propia estructura.
2. Agregar `src/pages/admin/` con las vistas protegidas.
3. Introducir un backend real (GitHub Pages solo sirve archivos estáticos: la
   autenticación y los datos tendrán que vivir fuera de este repositorio).
