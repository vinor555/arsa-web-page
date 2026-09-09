/** Datos de contacto e identidad. Fuente única para toda la aplicación. */
export const site = {
  name: 'ARSA',
  legalName: 'ARSA Group',
  tagline: 'Ingeniería y servicios para hidrocarburos',
  description:
    'Calibración, pruebas de hermeticidad, fabricación y mantenimiento de tanques, montaje de equipos y trámites ante el MEM para estaciones de servicio, consumos propios y operaciones de GLP en Guatemala.',
  url: 'https://arsagroup.com.gt/',
  country: 'Guatemala',
  contact: {
    email: 'kathleen.ar97@outlook.es',
    phone: '+502 4265 0291',
    /** Formato E.164 sin signos, requerido por los enlaces wa.me */
    phoneE164: '50242650291',
  },
} as const;

/** Mensajes prellenados para los distintos puntos de entrada a WhatsApp. */
export const whatsappMessages = {
  general: 'Hola ARSA, me gustaría recibir información sobre sus servicios.',
  quote: 'Hola ARSA, quisiera solicitar una cotización.',
  service: (serviceTitle: string) =>
    `Hola ARSA, me interesa el servicio de "${serviceTitle}". Me gustaría recibir más información.`,
} as const;

/** Construye el enlace de WhatsApp con el mensaje ya codificado. */
export function whatsappUrl(message: string = whatsappMessages.general) {
  return `https://wa.me/${site.contact.phoneE164}?text=${encodeURIComponent(message)}`;
}

export const telUrl = `tel:+${site.contact.phoneE164}`;
export const mailtoUrl = `mailto:${site.contact.email}`;
