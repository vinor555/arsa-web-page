import type { LucideIcon } from 'lucide-react';

interface ContactItemProps {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}

/** Fila de contacto: icono, rótulo y dato accionable. */
export function ContactItem({ icon: Icon, label, value, href, external = false }: ContactItemProps) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : null)}
      className="group flex items-start gap-4 rounded-lg border border-white/10 bg-white/5 p-4 transition hover:border-ember-400/60 hover:bg-white/10"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-ember-500/15 text-ember-400 transition group-hover:bg-ember-500 group-hover:text-white">
        <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
      </span>
      <span className="flex flex-col gap-0.5">
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-petrol-300">
          {label}
        </span>
        <span className="text-base font-medium break-all text-white">{value}</span>
      </span>
    </a>
  );
}
