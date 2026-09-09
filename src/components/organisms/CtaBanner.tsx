import { MessageCircle, Phone } from 'lucide-react';
import { Button, Container } from '@/components/atoms';
import { site, telUrl, whatsappMessages, whatsappUrl } from '@/data/site';

/** Banda de conversión entre secciones. */
export function CtaBanner() {
  return (
    <section className="bg-ember-500">
      <Container className="flex flex-col items-start gap-8 py-14 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-3xl leading-tight text-white sm:text-4xl">
            ¿Tiene una fecha de inspección encima?
          </h2>
          <p className="mt-3 text-base leading-relaxed text-white/90 sm:text-lg">
            Escríbanos y le decimos qué pruebas y documentos le hacen falta antes de que llegue la
            autoridad.
          </p>
        </div>

        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Button
            href={whatsappUrl(whatsappMessages.quote)}
            variant="secondary"
            size="lg"
            className="bg-petrol-950 hover:bg-petrol-900"
          >
            <MessageCircle className="h-5 w-5" aria-hidden />
            Escribir por WhatsApp
          </Button>
          <Button
            href={telUrl}
            size="lg"
            className="border border-white/60 bg-transparent text-white hover:bg-white/10"
          >
            <Phone className="h-5 w-5" aria-hidden />
            {site.contact.phone}
          </Button>
        </div>
      </Container>
    </section>
  );
}
