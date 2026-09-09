import { ArrowRight, MessageCircle, ShieldCheck } from 'lucide-react';
import heroImage from '@/assets/hero-operaciones.jpg';
import { Badge, Button, Container } from '@/components/atoms';
import { StatItem } from '@/components/molecules';
import { stats } from '@/data/company';
import { whatsappMessages, whatsappUrl } from '@/data/site';

/** Portada: fotografía de operaciones, propuesta de valor y accesos directos. */
export function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-petrol-950">
      <img
        src={heroImage}
        alt="Cisterna, equipo portátil de trasiego y personal de ARSA durante un trabajo en campo"
        className="absolute inset-0 h-full w-full object-cover object-center opacity-45"
        width={1600}
        height={761}
        fetchPriority="high"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-br from-petrol-950 via-petrol-950/85 to-petrol-900/60"
      />
      <div aria-hidden className="bg-blueprint absolute inset-0 opacity-60" />

      <Container className="relative flex min-h-[42rem] flex-col justify-center pb-16 pt-32 sm:min-h-[46rem] sm:pt-36">
        <div className="max-w-3xl animate-fade-up">
          <Badge tone="onDark" className="mb-6 px-3 py-1">
            <ShieldCheck className="mr-1.5 h-3.5 w-3.5" aria-hidden />
            Métodos API · NFPA 30 · Circulares DGH
          </Badge>

          <h1 className="font-display text-4xl leading-[1.05] font-bold text-white sm:text-6xl lg:text-7xl">
            Ingeniería y servicios para el manejo de{' '}
            <span className="text-ember-400">hidrocarburos</span> en Guatemala
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-petrol-100 sm:text-xl">
            Calibramos, probamos, fabricamos y mantenemos tanques y tuberías para estaciones de
            servicio, consumos propios y operaciones de GLP. Además gestionamos su expediente ante el
            Ministerio de Energía y Minas.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href={whatsappUrl(whatsappMessages.quote)} variant="whatsapp" size="lg">
              <MessageCircle className="h-5 w-5" aria-hidden />
              Cotizar por WhatsApp
            </Button>
            <Button href="#servicios" variant="ghost" size="lg">
              Ver los 32 servicios
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
          </div>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/10 pt-10 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <StatItem {...stat} />
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
