export interface NavItem {
  label: string;
  href: string;
}

/** Anclas de la landing. Al crecer el sitio, aqui se agregan las rutas. */
export const mainNav: NavItem[] = [
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Sectores', href: '#sectores' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Contacto', href: '#contacto' },
];
