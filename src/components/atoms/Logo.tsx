import { cn } from '@/lib/cn';

interface LogoProps {
  className?: string;
  /** Variante para fondos oscuros (hero, header transparente, footer). */
  onDark?: boolean;
  withTagline?: boolean;
}

/**
 * Marca denominativa. Se dibuja con tipografía y no con imagen para que
 * escale sin pérdida y siga el tema de color del sitio.
 */
export function Logo({ className, onDark = false, withTagline = false }: LogoProps) {
  return (
    <span className={cn('flex items-center gap-3', className)}>
      <span
        aria-hidden
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded bg-ember-500 font-display text-xl font-bold leading-none text-white"
      >
        a
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'font-display text-2xl font-bold tracking-[0.18em] uppercase',
            onDark ? 'text-white' : 'text-petrol-950',
          )}
        >
          arsa
        </span>
        {withTagline && (
          <span
            className={cn(
              'mt-1 text-[0.625rem] font-medium uppercase tracking-[0.16em]',
              onDark ? 'text-petrol-300' : 'text-steel-500',
            )}
          >
            Hidrocarburos
          </span>
        )}
      </span>
    </span>
  );
}
