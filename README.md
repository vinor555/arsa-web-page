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

## Arranque

```bash
npm install
npm run dev
```

| Script | Qué hace |
| --- | --- |
| `npm run dev` | Servidor de desarrollo en http://localhost:5173 |
| `npm run build` | Build de producción en `dist/` |
| `npm run preview` | Sirve el build con el mismo prefijo que GitHub Pages |
| `npm run lint` | ESLint sobre todo el proyecto |
| `npm run typecheck` | Verificación de tipos sin emitir |

## Atomic Design

```
src/components/
├── atoms/       Button, Container, Section, Badge, Logo, campos de formulario
├── molecules/   ServiceCard, CategoryFilter, ContactForm, SectionHeading, WhatsAppFab
├── organisms/   Header, Hero, About, Services, Sectors, Process, Contact, Footer
└── templates/   MainLayout (encabezado + contenido + pie + botón flotante)
src/pages/       HomePage, NotFoundPage
```

La regla: un nivel solo importa de niveles inferiores. Cada carpeta exporta a
través de su `index.ts`, y todo se importa con el alias `@/`.

## Dónde se edita el contenido

Nada de texto vive dentro de los componentes de página. Todo sale de `src/data/`:

- `site.ts` — nombre, descripción, correo, teléfono y los mensajes de WhatsApp.
- `services.ts` — el catálogo de 33 servicios y sus 6 categorías.
- `company.ts` — cifras, diferenciadores, sectores, pasos del proceso y normas.
- `navigation.ts` — enlaces del menú.

Para agregar un servicio basta con añadir un objeto a `services`; los contadores
de los filtros y el selector del formulario se actualizan solos.

## WhatsApp

El teléfono se define una sola vez en `site.contact.phoneE164`. La función
`whatsappUrl(mensaje)` arma el enlace `wa.me` con el texto ya codificado. Se usa
en el encabezado, el hero, la banda de conversión, cada tarjeta de servicio (con
el nombre del servicio precargado), el formulario y el botón flotante.

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
