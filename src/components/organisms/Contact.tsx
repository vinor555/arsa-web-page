import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { Container, Section } from '@/components/atoms';
import { ContactForm, ContactItem, SectionHeading } from '@/components/molecules';
import { mailtoUrl, site, telUrl, whatsappUrl } from '@/data/site';

/** Datos de contacto y formulario de cotización. */
export function Contact() {
  return (
    <Section id="contacto" tone="dark">
      <Container className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:gap-16">
        <div className="flex flex-col gap-8">
          <SectionHeading
            onDark
            eyebrow="Contacto"
            title="Cuéntenos qué necesita"
            description="Respondemos con alcance, normativa aplicable y precio. Si prefiere hablar antes, escríbanos por WhatsApp y coordinamos una visita técnica."
          />

          <div className="flex flex-col gap-3">
            <ContactItem
              icon={MessageCircle}
              label="WhatsApp"
              value={site.contact.whatsapp}
              href={whatsappUrl()}
              external
            />
            <ContactItem icon={Phone} label="Teléfono" value={site.contact.phone} href={telUrl} />
            <ContactItem
              icon={Mail}
              label="Correo"
              value={site.contact.email}
              href={mailtoUrl}
            />
          </div>

          <p className="flex items-center gap-2 text-sm text-petrol-300">
            <MapPin className="h-4 w-4 shrink-0 text-ember-400" aria-hidden />
            Cobertura en toda la República de {site.country}.
          </p>
        </div>

        <ContactForm />
      </Container>
    </Section>
  );
}
