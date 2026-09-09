import type { Stat } from '@/data/company';

/** Cifra destacada de la banda de confianza. */
export function StatItem({ value, label }: Stat) {
  return (
    <div className="flex flex-col gap-1 border-l-2 border-ember-500 pl-4">
      <span className="font-display text-3xl font-bold leading-none text-white sm:text-4xl">
        {value}
      </span>
      <span className="text-sm leading-snug text-petrol-300">{label}</span>
    </div>
  );
}
