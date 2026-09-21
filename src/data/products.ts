import { Droplets, FlaskConical, Gauge, type LucideIcon } from 'lucide-react';
import contadorBajoCaudal from '@/assets/productos/contador-bajo-caudal.webp';
import matraz5Galones from '@/assets/productos/matraz-5-galones.webp';

export interface ProductImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  tags: string[];
  /** Sin imagen, la tarjeta muestra el icono sobre fondo neutro. */
  image?: ProductImage;
  icon: LucideIcon;
}

export const products: Product[] = [
  {
    id: 'contador-volumetrico',
    title: 'Contador volumétrico (cuenta galones)',
    description:
      'Medidor para llevar el control exacto de los galones que despacha o consume. Incluye asesoría para implementar el más apropiado según su caso.',
    tags: ['Asesoría incluida', 'Instalación disponible'],
    image: {
      src: contadorBajoCaudal,
      alt: 'Contador volumétrico digital de bajo caudal',
      width: 714,
      height: 341,
    },
    icon: Gauge,
  },
  {
    id: 'matraz-aforado',
    title: 'Matraz aforado de 5 galones',
    description:
      'Recipiente patrón para verificar la exactitud de dispensadores y medidores de combustible.',
    tags: ['Capacidad de 5 galones'],
    image: {
      src: matraz5Galones,
      alt: 'Matraz aforado de acero inoxidable de 5 galones',
      width: 225,
      height: 225,
    },
    icon: FlaskConical,
  },
  {
    id: 'kolor-kut',
    title: 'Pasta Kolor Kut Modified',
    description:
      'Kolor Kut Modified Water Finding Paste, para detección de agua en combustibles reformulados y oxigenados como el etanol.',
    tags: ['Detección de agua', 'Combustibles con etanol'],
    icon: Droplets,
  },
];
