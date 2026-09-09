import { useEffect, useState } from 'react';
import { Menu, MessageCircle, X } from 'lucide-react';
import { Button, Container, Logo } from '@/components/atoms';
import { mainNav } from '@/data/navigation';
import { whatsappUrl } from '@/data/site';
import { cn } from '@/lib/cn';

/**
 * Encabezado fijo. Sobre el hero es transparente y al desplazarse adopta
 * fondo sólido para mantener el contraste del texto.
 */
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Con el menú móvil abierto se bloquea el desplazamiento del fondo.
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const isSolid = isScrolled || isMenuOpen;

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition duration-300',
        isSolid
          ? 'border-b border-steel-200 bg-white/95 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <Container className="flex h-20 items-center justify-between gap-6">
        <a href="#inicio" aria-label="ARSA, ir al inicio" className="shrink-0">
          <Logo onDark={!isSolid} withTagline />
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-8 lg:flex">
          {mainNav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                'relative text-sm font-medium transition after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:bg-ember-500 after:transition-all hover:after:w-full',
                isSolid ? 'text-steel-700 hover:text-petrol-950' : 'text-white/90 hover:text-white',
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href={whatsappUrl()} variant="whatsapp" size="sm">
            <MessageCircle className="h-4 w-4" aria-hidden />
            WhatsApp
          </Button>
          <Button href="#contacto" variant={isSolid ? 'secondary' : 'ghost'} size="sm">
            Cotizar
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-controls="menu-movil"
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          className={cn(
            'flex h-11 w-11 items-center justify-center rounded-md border transition lg:hidden',
            isSolid ? 'border-steel-200 text-petrol-950' : 'border-white/30 text-white',
          )}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {isMenuOpen && (
        <div id="menu-movil" className="border-t border-steel-200 bg-white lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {mainNav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-md px-2 py-3 text-base font-medium text-steel-700 transition hover:bg-steel-50 hover:text-petrol-950"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-3 flex flex-col gap-2">
              <Button href={whatsappUrl()} variant="whatsapp">
                <MessageCircle className="h-4 w-4" aria-hidden />
                Escribir por WhatsApp
              </Button>
              <Button href="#contacto" variant="secondary" onClick={() => setIsMenuOpen(false)}>
                Solicitar cotización
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
