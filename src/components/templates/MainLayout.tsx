import type { ReactNode } from 'react';
import { Footer, Header } from '@/components/organisms';
import { WhatsAppFab } from '@/components/molecules';

interface MainLayoutProps {
  children: ReactNode;
}

/**
 * Estructura común del sitio público: encabezado fijo, contenido y pie.
 * Las próximas páginas (servicios, blog, etc.) se montan sobre esta plantilla;
 * el panel administrativo tendrá la suya.
 */
export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-dvh flex-col">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-petrol-950"
      >
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido" className="flex-1">
        {children}
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
