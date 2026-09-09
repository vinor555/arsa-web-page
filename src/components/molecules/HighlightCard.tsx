import type { Highlight } from '@/data/company';

/** Diferenciador de la sección "Nosotros". */
export function HighlightCard({ title, description, icon: Icon }: Highlight) {
  return (
    <div className="flex gap-4">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-ember-200 bg-ember-50 text-ember-600">
        <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
      </span>
      <div className="flex flex-col gap-1">
        <h3 className="text-lg">{title}</h3>
        <p className="text-sm leading-relaxed text-steel-600">{description}</p>
      </div>
    </div>
  );
}
