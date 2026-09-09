import { Container, Section } from '@/components/atoms';
import { SectionHeading } from '@/components/molecules';
import { processSteps } from '@/data/company';

/** Cómo se ejecuta un proyecto, paso a paso. */
export function Process() {
  return (
    <Section id="proceso" tone="light">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Cómo trabajamos"
          title="De la primera visita a la resolución del MEM"
          description="Un proceso corto y predecible, con responsabilidades claras en cada etapa."
        />

        <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <li key={step.step} className="relative flex flex-col gap-3 border-t-2 border-steel-200 pt-6">
              <span
                aria-hidden
                className="absolute -top-0.5 left-0 h-0.5 w-10 bg-ember-500"
              />
              <span className="font-display text-4xl font-bold leading-none text-steel-200">
                {step.step}
              </span>
              <h3 className="text-xl">{step.title}</h3>
              <p className="text-sm leading-relaxed text-steel-600">{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
