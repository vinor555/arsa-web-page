import { useMemo, useState } from 'react';
import { Container, Section } from '@/components/atoms';
import {
  CategoryFilter,
  SectionHeading,
  ServiceCard,
  type CategoryFilterValue,
} from '@/components/molecules';
import { serviceCategories, serviceCountByCategory, services } from '@/data/services';

/** Catálogo completo de servicios con filtro por categoría. */
export function Services() {
  const [filter, setFilter] = useState<CategoryFilterValue>('todos');

  const visibleServices = useMemo(
    () => (filter === 'todos' ? services : services.filter((s) => s.category === filter)),
    [filter],
  );

  const categoryById = useMemo(
    () => new Map(serviceCategories.map((category) => [category.id, category])),
    [],
  );

  const activeCategory = serviceCategories.find((category) => category.id === filter);

  return (
    <Section id="servicios" tone="muted">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="Servicios"
          title="32 servicios especializados, de la calibración al trámite"
          description="Filtre por categoría para encontrar lo que necesita. Cada tarjeta abre una conversación de WhatsApp con el servicio ya indicado."
        />

        <CategoryFilter
          categories={serviceCategories}
          countByCategory={serviceCountByCategory}
          total={services.length}
          value={filter}
          onChange={setFilter}
        />

        {activeCategory && (
          <p className="-mt-4 max-w-3xl text-sm leading-relaxed text-steel-600">
            {activeCategory.description}
          </p>
        )}

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visibleServices.map((service) => {
            const category = categoryById.get(service.category);
            if (!category) return null;

            return (
              <li key={service.id} className="flex">
                <ServiceCard service={service} category={category} />
              </li>
            );
          })}
        </ul>

        <p className="text-sm text-steel-500" role="status" aria-live="polite">
          Mostrando {visibleServices.length} de {services.length} servicios.
        </p>
      </Container>
    </Section>
  );
}
