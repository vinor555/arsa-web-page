import {
  Container,
  DraftingCompass,
  FileCheck2,
  Gauge,
  Package,
  Truck,
  type LucideIcon,
} from 'lucide-react';

export type ServiceCategoryId =
  | 'calibracion'
  | 'tanques'
  | 'ingenieria'
  | 'montaje'
  | 'normativa'
  | 'productos';

export interface ServiceCategory {
  id: ServiceCategoryId;
  label: string;
  /** Etiqueta corta para los filtros en pantallas angostas */
  shortLabel: string;
  description: string;
  icon: LucideIcon;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  category: ServiceCategoryId;
  /** Normas o circulares aplicables; se muestran como etiquetas */
  standards?: string[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'calibracion',
    label: 'Calibración y hermeticidad',
    shortLabel: 'Calibración',
    description:
      'Volumetría certificada de tanques y pruebas de funcionalidad para tuberías y tanques de combustibles y GLP.',
    icon: Gauge,
  },
  {
    id: 'tanques',
    label: 'Tanques: fabricación y mantenimiento',
    shortLabel: 'Tanques',
    description:
      'Construcción, limpieza, recubrimiento y cierre técnico de tanques de agua e hidrocarburos.',
    icon: Container,
  },
  {
    id: 'ingenieria',
    label: 'Ingeniería, diseño y planos',
    shortLabel: 'Ingeniería',
    description:
      'Diseño, modificaciones y planos para estaciones de servicio y consumos propios conforme a la normativa del MEM.',
    icon: DraftingCompass,
  },
  {
    id: 'montaje',
    label: 'Montaje, equipos y tuberías',
    shortLabel: 'Montaje',
    description:
      'Movimiento e instalación de tanques, calderas y plantas eléctricas, con mantenimiento y líneas de vapor.',
    icon: Truck,
  },
  {
    id: 'normativa',
    label: 'Trámites, licencias y capacitación',
    shortLabel: 'Normativa',
    description:
      'Gestión completa ante el Ministerio de Energía y Minas y formación del personal que opera hidrocarburos.',
    icon: FileCheck2,
  },
  {
    id: 'productos',
    label: 'Productos y suministros',
    shortLabel: 'Productos',
    description: 'Insumos especializados para la medición y control de combustibles.',
    icon: Package,
  },
];

export const services: Service[] = [
  // --- Calibración y hermeticidad ------------------------------------------
  {
    id: 'calibracion-combustibles',
    category: 'calibracion',
    title: 'Calibración de tanques para combustibles',
    description:
      'Tabla volumétrica de tanques de combustible levantada con los métodos reconocidos por la industria petrolera.',
    standards: ['API 2551', 'API 2555'],
  },
  {
    id: 'calibracion-glp',
    category: 'calibracion',
    title: 'Calibración de tanques de GLP',
    description:
      'Determinación de capacidad y tabla de aforo para tanques de gas licuado de petróleo.',
  },
  {
    id: 'hermeticidad-estaciones-combustibles',
    category: 'calibracion',
    title: 'Hermeticidad para estaciones de servicio (combustibles)',
    description:
      'Pruebas de funcionalidad a tuberías y tanques de estaciones de servicio nuevas y de sus modificaciones.',
  },
  {
    id: 'hermeticidad-consumos-combustibles',
    category: 'calibracion',
    title: 'Hermeticidad para consumos propios (combustibles)',
    description:
      'Pruebas de funcionalidad a tuberías y tanques de consumos propios nuevos y de sus modificaciones.',
  },
  {
    id: 'hermeticidad-puntos-venta-glp',
    category: 'calibracion',
    title: 'Hermeticidad para puntos de venta de GLP',
    description:
      'Pruebas de funcionalidad a tuberías y tanques en puntos de venta al público nuevos y modificaciones de GLP.',
  },
  {
    id: 'hermeticidad-consumos-glp',
    category: 'calibracion',
    title: 'Hermeticidad para consumos propios de GLP',
    description:
      'Pruebas de funcionalidad a tuberías y tanques de consumos propios nuevos y modificaciones de GLP.',
  },

  // --- Tanques --------------------------------------------------------------
  {
    id: 'fabricacion-tanques',
    category: 'tanques',
    title: 'Fabricación de tanques',
    description:
      'Tanques para agua e hidrocarburos: GLP, gasolina, diésel, búnker, crudo, avgas y avjet.',
  },
  {
    id: 'mantenimiento-limpieza-tanques',
    category: 'tanques',
    title: 'Mantenimiento y limpieza de tanques',
    description:
      'Limpieza interna y externa con manejo controlado de residuos y trabajo en espacios confinados.',
  },
  {
    id: 'limpieza-e10',
    category: 'tanques',
    title: 'Limpieza interna de tanques para E10 (etanol)',
    description:
      'Acondicionamiento de tanques para mezcla con etanol en cumplimiento de la circular DGH-CIRC-003-2026.',
    standards: ['API 2015', 'API 1631', 'API RP-1615', 'NFPA 30', 'NFPA 30A'],
  },
  {
    id: 'pintura-rotulacion',
    category: 'tanques',
    title: 'Pintura y rotulación',
    description:
      'Recubrimiento y señalización interna y externa según normativa para estaciones de servicio nuevas y consumos propios.',
  },
  {
    id: 'sandblasting',
    category: 'tanques',
    title: 'Sandblasting',
    description:
      'Preparación de superficie por chorro abrasivo para tanques metálicos de agua o combustible.',
  },
  {
    id: 'degasificacion',
    category: 'tanques',
    title: 'Degasificación de tanques y áreas con H2S',
    description:
      'Remoción de vapores y saneamiento de tanques o áreas contaminadas por ácido sulfhídrico.',
  },
  {
    id: 'plan-abandono',
    category: 'tanques',
    title: 'Plan de abandono de tanques',
    description:
      'Cierre técnico de tanques de hidrocarburos: GLP, gasolina, diésel, búnker, crudo, avgas y avjet.',
  },

  // --- Ingeniería -----------------------------------------------------------
  {
    id: 'diseno-consumos-mem',
    category: 'ingenieria',
    title: 'Diseño y modificaciones de consumos de hidrocarburos',
    description: 'Proyectos nuevos y adecuaciones conforme a las normativas del MEM.',
  },
  {
    id: 'planos-combustibles',
    category: 'ingenieria',
    title: 'Planos para combustibles',
    description:
      'Elaboración de planos de estaciones de servicio y consumos propios para combustibles líquidos.',
  },
  {
    id: 'planos-glp',
    category: 'ingenieria',
    title: 'Planos para GLP',
    description: 'Elaboración de planos de estaciones de servicio y consumos propios para GLP.',
  },
  {
    id: 'asesoria-tuberias',
    category: 'ingenieria',
    title: 'Asesoría y cambio de tuberías',
    description: 'Migración de líneas existentes a sistemas NUPI, PALP y UPP.',
  },
  {
    id: 'sistemas-contra-incendios',
    category: 'ingenieria',
    title: 'Sistemas contra incendios de agua o espuma',
    description: 'Diseño, modificación y mantenimiento de redes de protección contra incendios.',
  },

  // --- Montaje y equipos ----------------------------------------------------
  {
    id: 'movimiento-tanques',
    category: 'montaje',
    title: 'Movimiento e instalación de tanques',
    description: 'Traslado, izaje y montaje de tanques para todo tipo de hidrocarburos.',
  },
  {
    id: 'movimiento-plantas',
    category: 'montaje',
    title: 'Movimiento e instalación de plantas eléctricas',
    description: 'Reubicación y puesta en sitio de plantas de generación eléctrica.',
  },
  {
    id: 'movimiento-calderas',
    category: 'montaje',
    title: 'Movimiento e instalación de calderas',
    description: 'Traslado y montaje de calderas con sus conexiones de proceso.',
  },
  {
    id: 'mantenimiento-plantas',
    category: 'montaje',
    title: 'Mantenimiento a plantas eléctricas',
    description: 'Mantenimiento preventivo y correctivo para asegurar la disponibilidad del equipo.',
  },
  {
    id: 'mantenimiento-calderas',
    category: 'montaje',
    title: 'Mantenimiento de calderas',
    description: 'Inspección, limpieza y ajuste de calderas y sus sistemas auxiliares.',
  },
  {
    id: 'serpentin',
    category: 'montaje',
    title: 'Fabricación y pruebas de serpentín',
    description:
      'Manufactura de serpentines de calentamiento y pruebas de presión antes de entrar en operación.',
  },
  {
    id: 'trasiego-bunker',
    category: 'montaje',
    title: 'Trasiego de búnker y derivados',
    description: 'Trasvase controlado de búnker o cualquier derivado del petróleo.',
  },
  {
    id: 'tuberias-vapor',
    category: 'montaje',
    title: 'Instalación de tuberías de vapor',
    description: 'Montaje de líneas de vapor con soportería y aislamiento.',
  },
  {
    id: 'juntas-expansion',
    category: 'montaje',
    title: 'Juntas de expansión en tuberías de vapor',
    description: 'Instalación de juntas que absorben la dilatación térmica de la línea.',
  },

  // --- Normativa ------------------------------------------------------------
  {
    id: 'tramites-mem',
    category: 'normativa',
    title: 'Trámites ante el Ministerio de Energía y Minas',
    description: 'Gestión de expedientes y seguimiento de trámites en general según sea el caso.',
  },
  {
    id: 'licencias',
    category: 'normativa',
    title: 'Licencias nuevas y renovaciones',
    description:
      'Solicitud y renovación de licencias para consumos propios y estaciones de servicio.',
  },
  {
    id: 'capacitacion',
    category: 'normativa',
    title: 'Capacitación en seguridad industrial',
    description: 'Formación del personal para el manejo seguro de hidrocarburos.',
  },
  {
    id: 'cumplimiento-glp',
    category: 'normativa',
    title: 'Requisitos mínimos de seguridad para depósito de GLP',
    description:
      'Asesoría y ejecución para operaciones de depósito de GLP (propano, butano o mezcla).',
    standards: ['DGH-CIRC-009-2019'],
  },

  // --- Productos ------------------------------------------------------------
  {
    id: 'pastas-etanol',
    category: 'productos',
    title: 'Venta de pastas detectoras para etanol',
    description: 'Pastas modificadas color cut, M-3, para medición en combustibles con etanol.',
  },
];

/** Cantidad de servicios por categoría, para los contadores de los filtros. */
export const serviceCountByCategory = serviceCategories.reduce<Record<ServiceCategoryId, number>>(
  (acc, category) => {
    acc[category.id] = services.filter((service) => service.category === category.id).length;
    return acc;
  },
  {} as Record<ServiceCategoryId, number>,
);
