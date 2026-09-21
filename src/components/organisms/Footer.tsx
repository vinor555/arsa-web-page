import { Mail, MessageCircle, Phone } from 'lucide-react';
import { Container, Logo } from '@/components/atoms';
import { mainNav } from '@/data/navigation';
import { serviceCategories } from '@/data/services';
import { mailtoUrl, site, telUrl, whatsappUrl } from '@/data/site';

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-petrol-950 text-petrol-300">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
          <Logo onDark withTagline size="md" />
          <p className="max-w-sm text-sm leading-relaxed">{site.description}</p>
        </div>

        <nav aria-label="Secciones del sitio" className="flex flex-col gap-3">
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-white">Sitio</h2>
          {mainNav.map((item) => (
            <a key={item.href} href={item.href} className="text-sm transition hover:text-ember-400">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-3">
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-white">Servicios</h2>
          {serviceCategories.map((category) => (
            <a
              key={category.id}
              href="#servicios"
              className="text-sm transition hover:text-ember-400"
            >
              {category.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-white">Contacto</h2>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm transition hover:text-ember-400"
          >
            <MessageCircle className="h-4 w-4 shrink-0" aria-hidden />
            <span>
              <span className="sr-only">WhatsApp: </span>
              {site.contact.whatsapp}
            </span>
          </a>
          <a href={telUrl} className="flex items-center gap-2 text-sm transition hover:text-ember-400">
            <Phone className="h-4 w-4 shrink-0" aria-hidden />
            {site.contact.phone}
          </a>
          <a
            href={mailtoUrl}
            className="flex items-center gap-2 break-all text-sm transition hover:text-ember-400"
          >
            <Mail className="h-4 w-4 shrink-0" aria-hidden />
            {site.contact.email}
          </a>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-6 pb-24 text-xs sm:flex-row sm:items-center sm:justify-between sm:pb-6">
          <p>
            © {year} {site.legalName}. Todos los derechos reservados.
          </p>
          <p>{site.country}</p>
        </Container>
      </div>
    </footer>
  );
}
