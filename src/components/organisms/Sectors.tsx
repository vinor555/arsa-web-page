import { Container, Section } from '@/components/atoms';
import { SectionHeading } from '@/components/molecules';
import { sectors } from '@/data/company';

/** Sectores atendidos. */
export function Sectors() {
  return (
    <Section id="sectores" tone="dark">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          onDark
          align="center"
          className="mx-auto items-center"
          eyebrow="Sectores"
          title="A quién atendemos"
          description="Operaciones de combustibles líquidos y gas licuado de petróleo, en obra nueva y en instalaciones que ya están funcionando."
        />

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((sector) => {
            const Icon = sector.icon;

            return (
              <li
                key={sector.name}
                className="flex items-start gap-4 rounded-lg border border-white/10 bg-white/[0.04] p-6 transition hover:border-ember-400/50 hover:bg-white/[0.08]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-ember-500/15 text-ember-400">
                  <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                </span>
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg text-white">{sector.name}</h3>
                  <p className="text-sm leading-relaxed text-petrol-300">{sector.description}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
