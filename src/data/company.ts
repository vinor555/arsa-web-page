import {
  BadgeCheck,
  ClipboardList,
  Factory,
  Flame,
  Fuel,
  HardHat,
  Handshake,
  Plane,
  Ship,
  ShieldCheck,
  Wrench,
  type LucideIcon,
} from 'lucide-react';

export interface Stat {
  value: string;
  label: string;
}

export interface Highlight {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Sector {
  name: string;
  description: string;
  icon: LucideIcon;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

/** Cifras de la banda de confianza bajo el hero. */
export const stats: Stat[] = [
  { value: '33', label: 'Servicios especializados' },
  { value: 'API + NFPA', label: 'Métodos y normas aplicadas' },
  { value: 'MEM', label: 'Trámites y licencias gestionados' },
  { value: '100%', label: 'Trabajos con protocolo de seguridad' },
];

/** Diferenciadores mostrados en la sección "Nosotros". */
export const highlights: Highlight[] = [
  {
    title: 'Cumplimiento normativo',
    description:
      'Trabajamos bajo métodos API, NFPA 30 y NFPA 30A, y las circulares vigentes de la Dirección General de Hidrocarburos.',
    icon: ShieldCheck,
  },
  {
    title: 'Un solo proveedor',
    description:
      'Calibración, obra, montaje y trámite ante el MEM en un mismo equipo, sin coordinar a varios contratistas.',
    icon: Handshake,
  },
  {
    title: 'Personal certificado',
    description:
      'Cuadrillas capacitadas en espacios confinados, atmósferas explosivas y manejo de hidrocarburos.',
    icon: HardHat,
  },
  {
    title: 'Entregables auditables',
    description:
      'Tablas volumétricas, informes de hermeticidad y expedientes listos para presentar ante la autoridad.',
    icon: ClipboardList,
  },
];

/** Tipos de operación que atendemos. */
export const sectors: Sector[] = [
  {
    name: 'Estaciones de servicio',
    description: 'Obra nueva, modificaciones, pruebas y licencias.',
    icon: Fuel,
  },
  {
    name: 'Consumos propios',
    description: 'Flotillas e instalaciones internas de combustible.',
    icon: Factory,
  },
  {
    name: 'Operaciones de GLP',
    description:
      'Puntos de venta al público, consumos propios y depósitos de propano y butano.',
    icon: Flame,
  },
  {
    name: 'Industria y generación',
    description:
      'Calderas, plantas eléctricas, tanques de agua caliente, vapor y búnker.',
    icon: Wrench,
  },
  {
    name: 'Aviación',
    description: 'Almacenamiento y manejo de avgas y avjet.',
    icon: Plane,
  },
  {
    name: 'Terminales y transporte',
    description: 'Crudo, derivados y trasiego entre tanques.',
    icon: Ship,
  },
];

/** Cómo se ejecuta un proyecto, de la consulta a la entrega. */
export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Diagnóstico',
    description:
      'Visitamos el sitio, revisamos la instalación existente y definimos el alcance real del trabajo.',
  },
  {
    step: '02',
    title: 'Propuesta técnica',
    description:
      'Recibe alcance, normativa aplicable, tiempos y costo por escrito antes de comprometer nada.',
  },
  {
    step: '03',
    title: 'Ejecución',
    description:
      'Cuadrilla en campo con plan de seguridad, control de calidad y reporte de avance del proyecto.',
  },
  {
    step: '04',
    title: 'Entrega y trámite',
    description:
      'Informes, planos y expediente presentado ante el MEM hasta obtener la resolución.',
  },
];

/** Normas y referencias que respaldan los servicios. */
export const standards = [
  'API 2551',
  'API 2555',
  'API 2015',
  'API 1631',
  'API RP-1615',
  'NFPA 30',
  'NFPA 30A',
  'DGH-CIRC-003-2026',
  'DGH-CIRC-009-2019',
] as const;

export const certificationIcon = BadgeCheck;
