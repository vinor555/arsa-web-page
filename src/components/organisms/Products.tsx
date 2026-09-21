import { Container, Section } from '@/components/atoms';
import { ProductCard, SectionHeading } from '@/components/molecules';
import { products } from '@/data/products';

/** Equipos e insumos que ARSA vende. */
export function Products() {
  return (
    <Section id="productos" tone="light">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Productos"
          title="Equipos e insumos para medir y controlar su combustible"
          description="Le ayudamos a elegir el equipo adecuado para su operación y, si lo necesita, también lo instalamos."
        />

        <ul className="grid gap-6 md:grid-cols-3">
          {products.map((product) => (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
