import { useState, type FormEvent } from 'react';
import { Mail, MessageCircle } from 'lucide-react';
import { Button, TextAreaField, TextField } from '@/components/atoms';
import { products } from '@/data/products';
import { services } from '@/data/services';
import { mailtoUrl, site, whatsappUrl } from '@/data/site';

interface FormState {
  nombre: string;
  empresa: string;
  contacto: string;
  servicio: string;
  mensaje: string;
}

const initialState: FormState = {
  nombre: '',
  empresa: '',
  contacto: '',
  servicio: '',
  mensaje: '',
};

/** Redacta el cuerpo del mensaje a partir de lo que llenó el visitante. */
function composeMessage({ nombre, empresa, contacto, servicio, mensaje }: FormState) {
  return [
    `Hola ${site.name}, solicito una cotización.`,
    '',
    `Nombre: ${nombre}`,
    empresa && `Empresa: ${empresa}`,
    `Contacto: ${contacto}`,
    servicio && `Servicio o producto: ${servicio}`,
    mensaje && '',
    mensaje && `Detalle: ${mensaje}`,
  ]
    .filter(Boolean)
    .join('\n');
}

/**
 * El sitio es estático, así que el formulario no envía a un servidor: arma el
 * mensaje y lo entrega por WhatsApp o por correo, según elija el visitante.
 */
export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);

  const update = (field: keyof FormState) => (value: string) =>
    setForm((current) => ({ ...current, [field]: value }));

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.open(whatsappUrl(composeMessage(form)), '_blank', 'noopener,noreferrer');
  };

  const emailHref = `${mailtoUrl}?subject=${encodeURIComponent(
    `Solicitud de cotización${form.servicio ? ` — ${form.servicio}` : ''}`,
  )}&body=${encodeURIComponent(composeMessage(form))}`;

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 rounded-lg border border-steel-200 bg-white p-6 shadow-card sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <TextField
          label="Nombre"
          name="nombre"
          required
          autoComplete="name"
          placeholder="Su nombre"
          value={form.nombre}
          onChange={(event) => update('nombre')(event.target.value)}
        />
        <TextField
          label="Empresa"
          name="empresa"
          autoComplete="organization"
          placeholder="Nombre de la empresa"
          value={form.empresa}
          onChange={(event) => update('empresa')(event.target.value)}
        />
      </div>

      <TextField
        label="Teléfono o correo"
        name="contacto"
        required
        placeholder="Para poder responderle"
        value={form.contacto}
        onChange={(event) => update('contacto')(event.target.value)}
      />

      <div className="flex flex-col gap-1.5">
        <label htmlFor="servicio" className="text-sm font-medium text-petrol-900">
          Servicio o producto de interés
        </label>
        <select
          id="servicio"
          name="servicio"
          value={form.servicio}
          onChange={(event) => update('servicio')(event.target.value)}
          className="w-full rounded-md border border-steel-200 bg-white px-3.5 py-2.5 text-sm text-petrol-950 transition focus:border-ember-500 focus:ring-2 focus:ring-ember-500/20 focus:outline-none"
        >
          <option value="">Seleccione una opción (opcional)</option>
          <optgroup label="Servicios">
            {services.map((service) => (
              <option key={service.id} value={service.title}>
                {service.title}
              </option>
            ))}
          </optgroup>
          <optgroup label="Productos">
            {products.map((product) => (
              <option key={product.id} value={product.title}>
                {product.title}
              </option>
            ))}
          </optgroup>
        </select>
      </div>

      <TextAreaField
        label="Detalle del proyecto"
        name="mensaje"
        placeholder="Capacidad de los tanques, ubicación, fechas estimadas, etc."
        value={form.mensaje}
        onChange={(event) => update('mensaje')(event.target.value)}
      />

      <div className="flex flex-col gap-3 sm:flex-row">
        <Button type="submit" variant="whatsapp" size="lg" className="sm:flex-1">
          <MessageCircle className="h-5 w-5" aria-hidden />
          Enviar por WhatsApp
        </Button>
        <Button href={emailHref} variant="secondary" size="lg" className="sm:flex-1">
          <Mail className="h-5 w-5" aria-hidden />
          Enviar por correo
        </Button>
      </div>

      <p className="text-xs leading-relaxed text-steel-500">
        Al enviar se abre WhatsApp o su gestor de correo con el mensaje ya redactado. Sus datos no se
        almacenan en este sitio.
      </p>
    </form>
  );
}
