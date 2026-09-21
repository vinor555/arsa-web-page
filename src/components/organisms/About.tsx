import calibracionDiesel from '@/assets/nosotros/calibracion-diesel.webp';
import tanqueDiesel from '@/assets/nosotros/tanque-diesel-2500.webp';
import { Container, Section } from '@/components/atoms';
import { HighlightCard, SectionHeading } from '@/components/molecules';
import { highlights, standards } from '@/data/company';

/** Quiénes somos: propuesta de valor, fotos de campo y normas de referencia. */
export function About() {
  return (
    <Section id="nosotros" tone="light">
      <Container className="flex flex-col gap-16 lg:gap-20">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
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

          {/* Mosaico: la foto de calibración domina y la del tanque la acompaña. */}
          <div className="relative mx-auto w-full max-w-md pb-10 sm:max-w-lg lg:max-w-none">
            <figure className="relative ml-auto w-[82%]">
              <img
                src={calibracionDiesel}
                alt="Técnico de ARSA midiendo la circunferencia de un tanque de diésel para su calibración"
                width={880}
                height={1100}
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full rounded-lg object-cover shadow-lift"
              />
              <figcaption className="absolute right-3 top-3 rounded bg-petrol-950/75 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
                Calibración en campo
              </figcaption>
            </figure>
            <figure className="absolute bottom-0 left-0 w-[52%]">
              <img
                src={tanqueDiesel}
                alt="Tanque de diésel de 2,500 galones fabricado, pintado y rotulado por ARSA"
                width={1000}
                height={750}
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full rounded-lg border-4 border-white object-cover shadow-lift"
              />
              <figcaption className="absolute bottom-3 left-3 rounded bg-petrol-950/75 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
                Fabricación a medida
              </figcaption>
            </figure>
          </div>
        </div>

        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
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
