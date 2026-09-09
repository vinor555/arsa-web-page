import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface EyebrowProps {
  children: ReactNode;
  className?: string;
  onDark?: boolean;
}

/** Rótulo pequeño en versalitas que antecede a los títulos de sección. */
export function Eyebrow({ children, className, onDark = false }: EyebrowProps) {
  return (
    <p
      className={cn(
        'flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em]',
        onDark ? 'text-ember-400' : 'text-ember-600',
        className,
      )}
    >
      <span aria-hidden className="h-px w-8 bg-current opacity-60" />
      {children}
    </p>
  );
}
