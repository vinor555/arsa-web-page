import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface BadgeProps {
  children: ReactNode;
  className?: string;
  tone?: 'neutral' | 'accent' | 'onDark';
}

const tones = {
  neutral: 'border-steel-200 bg-steel-50 text-steel-600',
  accent: 'border-ember-200 bg-ember-50 text-ember-700',
  onDark: 'border-white/20 bg-white/10 text-petrol-100',
} as const;

/** Etiqueta compacta para normas, categorías y metadatos. */
export function Badge({ children, className, tone = 'neutral' }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded border px-2 py-0.5 text-xs font-medium tracking-wide',
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
