import { MessageCircle } from 'lucide-react';
import { Badge, Button } from '@/components/atoms';
import type { Product } from '@/data/products';
import { whatsappMessages, whatsappUrl } from '@/data/site';

interface ProductCardProps {
  product: Product;
}

/** Tarjeta de producto: foto sobre fondo blanco, descripción y consulta directa. */
export function ProductCard({ product }: ProductCardProps) {
  const { title, description, tags, image, icon: Icon } = product;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg border border-steel-200 bg-white shadow-card">
      <div className="flex aspect-[4/3] items-center justify-center border-b border-steel-100 bg-white p-8">
        {image ? (
          <img
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            loading="lazy"
            decoding="async"
            // Las fotos de producto son pequeñas: se limitan para que no se pixelen.
            className="max-h-44 w-auto max-w-full object-contain"
          />
        ) : (
          <div className="flex flex-col items-center gap-3 text-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-ember-50 text-ember-600">
              <Icon className="h-8 w-8" strokeWidth={1.5} aria-hidden />
            </span>
            <span className="font-display text-lg font-semibold uppercase tracking-[0.12em] text-petrol-900">
              {title.replace(/^Pasta /, '')}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="text-xl leading-snug">{title}</h3>
        <p className="text-sm leading-relaxed text-steel-600">{description}</p>

        <ul className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <li key={tag}>
              <Badge tone="accent">{tag}</Badge>
            </li>
          ))}
        </ul>

        <Button
          href={whatsappUrl(whatsappMessages.product(title))}
          variant="whatsapp"
          size="sm"
          className="mt-auto self-start"
        >
          <MessageCircle className="h-4 w-4" aria-hidden />
          Consultar
          <span className="sr-only"> sobre {title}</span>
        </Button>
      </div>
    </article>
  );
}
