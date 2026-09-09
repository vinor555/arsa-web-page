import { ArrowUpRight } from 'lucide-react';
import { Badge } from '@/components/atoms';
import { whatsappMessages, whatsappUrl } from '@/data/site';
import type { Service, ServiceCategory } from '@/data/services';

interface ServiceCardProps {
  service: Service;
  category: ServiceCategory;
}

/** Tarjeta de servicio; el enlace completo abre WhatsApp con el mensaje listo. */
export function ServiceCard({ service, category }: ServiceCardProps) {
  const Icon = category.icon;

  return (
    <article className="group relative flex flex-col gap-3 rounded-lg border border-steel-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-ember-300 hover:shadow-lift">
      <span className="flex h-10 w-10 items-center justify-center rounded-md bg-petrol-50 text-petrol-600 transition group-hover:bg-ember-500 group-hover:text-white">
        <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
      </span>

      <h3 className="text-lg leading-snug">
        <a
          href={whatsappUrl(whatsappMessages.service(service.title))}
          target="_blank"
          rel="noopener noreferrer"
          className="after:absolute after:inset-0 after:content-['']"
        >
          {service.title}
          <span className="sr-only"> — consultar por WhatsApp</span>
        </a>
      </h3>

      <p className="text-sm leading-relaxed text-steel-600">{service.description}</p>

      {service.standards && (
        <ul className="mt-auto flex flex-wrap gap-1.5 pt-2">
          {service.standards.map((standard) => (
            <li key={standard}>
              <Badge>{standard}</Badge>
            </li>
          ))}
        </ul>
      )}

      <ArrowUpRight
        aria-hidden
        className="absolute right-5 top-6 h-4 w-4 text-steel-300 opacity-0 transition group-hover:opacity-100"
      />
    </article>
  );
}
