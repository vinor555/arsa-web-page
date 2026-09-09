import logoMarca from '@/assets/logo-marca.png';
import logoTexto from '@/assets/logo-arsa.png';
import { cn } from '@/lib/cn';

interface LogoProps {
  className?: string;
  /** El logo es plateado: está pensado para fondos oscuros. */
  onDark?: boolean;
  withTagline?: boolean;
  size?: 'sm' | 'md';
}

const sizes = {
  sm: { marca: 'h-10', texto: 'h-4', tagline: 'text-[0.5rem]' },
  md: { marca: 'h-14', texto: 'h-5', tagline: 'text-[0.6rem]' },
} as const;

/**
 * Marca institucional: el isotipo y la palabra ARSA en su versión original.
 * Sobre fondo claro el plateado pierde contraste, así que en ese caso se oscurece.
 */
export function Logo({ className, onDark = false, withTagline = false, size = 'sm' }: LogoProps) {
  const s = sizes[size];
  const ajuste = onDark ? null : 'brightness-[0.45] contrast-[1.35]';

  return (
    <span className={cn('flex items-center gap-3', className)}>
      <img
        src={logoMarca}
        alt=""
        aria-hidden
        width={291}
        height={240}
        className={cn(s.marca, 'w-auto shrink-0', ajuste)}
      />
      <span className="flex flex-col gap-1">
        <img
          src={logoTexto}
          alt="ARSA"
          width={440}
          height={120}
          className={cn(s.texto, 'w-auto', ajuste)}
        />
        {withTagline && (
          <span
            className={cn(
              'font-medium uppercase tracking-[0.16em]',
              s.tagline,
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
