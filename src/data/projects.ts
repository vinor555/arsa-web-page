/**
 * Galería de proyectos. Cada foto existe en dos tamaños dentro de
 * src/assets/proyectos: `<slug>-mini.webp` (recorte 4:3 de 800 px para la
 * cuadrícula) y `<slug>.webp` (foto completa de hasta 1600 px para ampliarla).
 */
const images = import.meta.glob<string>('../assets/proyectos/*.webp', {
  eager: true,
  import: 'default',
});

function image(file: string) {
  const src = images[`../assets/proyectos/${file}.webp`];
  if (!src) throw new Error(`Falta la imagen de proyecto: ${file}.webp`);
  return src;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  thumb: string;
  full: string;
  /** Dimensiones de la foto completa */
  width: number;
  height: number;
}

type ProjectEntry = Omit<Project, 'thumb' | 'full'>;

const entries: ProjectEntry[] = [
  { id: 'jet-a-tanques', category: 'Aviación', title: 'Tanques de Jet A rotulados', width: 1600, height: 1200 },
  { id: 'calibracion-medidas-externas', category: 'Calibración', title: 'Calibración por medición externa', width: 1200, height: 1600 },
  { id: 'sandblasting-campo', category: 'Sandblasting', title: 'Sandblasting en campo', width: 1600, height: 1200 },
  { id: 'planta-asfalto-tanques', category: 'Industria', title: 'Tanques en planta de asfalto', width: 1600, height: 1200 },
  { id: 'fabricacion-tanque', category: 'Fabricación', title: 'Fabricación de tanque de acero', width: 1280, height: 982 },
  { id: 'calibracion-volumetrica-estacion', category: 'Calibración', title: 'Calibración volumétrica en estación nueva', width: 1200, height: 1600 },
  { id: 'pintura-cubeto', category: 'Pintura', title: 'Pintura de dique de contención', width: 1600, height: 1200 },
  { id: 'serpentin', category: 'Fabricación', title: 'Serpentín de calentamiento', width: 1200, height: 1600 },
  { id: 'mantenimiento-interno', category: 'Mantenimiento', title: 'Mantenimiento interno de tanque', width: 780, height: 1040 },
  { id: 'trasiego-cisterna', category: 'Trasiego', title: 'Trasiego desde cisterna', width: 1280, height: 957 },
  { id: 'contadores-volumetricos', category: 'Montaje', title: 'Armado de contadores volumétricos', width: 1600, height: 1200 },
  { id: 'tanque-gasolina-5000', category: 'Fabricación', title: 'Tanque de 5,000 galones terminado', width: 1040, height: 520 },
];

export const projects: Project[] = entries.map((entry) => ({
  ...entry,
  thumb: image(`${entry.id}-mini`),
  full: image(entry.id),
}));
