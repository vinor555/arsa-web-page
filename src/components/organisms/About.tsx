import { Container, Section } from '@/components/atoms';
import { HighlightCard, SectionHeading } from '@/components/molecules';
import { highlights, standards } from '@/data/company';

/** Quiénes somos: propuesta de valor y normas de referencia. */
export function About() {
  return (
    <Section id="nosotros" tone="light">
      <Container className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-20">
        <div className="flex flex-col gap-8">
          <SectionHeading
            eyebrow="Quiénes somos"
            title="Un solo equipo para toda la vida útil de su instalación"
            description="ARSA acompaña proyectos de combustibles y GLP desde el diseño y la obra hasta la calibración, el mantenimiento y el cierre técnico. Trabajamos con procedimientos escritos, control de calidad y entregables que resisten una auditoría."
          />

          <div className="rounded-lg border border-steel-200 bg-steel-50 p-6">
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-steel-500">
              Normas y circulares que aplicamos
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {standards.map((standard) => (
                <li
                  key={standard}
                  className="rounded border border-steel-200 bg-white px-2.5 py-1 font-mono text-xs text-petrol-800"
                >
                  {standard}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ul className="grid gap-8 sm:grid-cols-2 lg:pt-4">
          {highlights.map((highlight) => (
            <li key={highlight.title}>
              <HighlightCard {...highlight} />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
