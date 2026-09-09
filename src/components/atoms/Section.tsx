import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  /** `dark` pinta la banda azul petróleo con retícula técnica de fondo. */
  tone?: 'light' | 'muted' | 'dark';
}

const toneStyles = {
  light: 'bg-white',
  muted: 'bg-steel-50',
  dark: 'bg-petrol-950 text-petrol-100',
} as const;

export function Section({ id, className, children, tone = 'light' }: SectionProps) {
  return (
    <section
      id={id}
      className={cn('relative py-20 sm:py-28', toneStyles[tone], className)}
    >
      {tone === 'dark' && (
        <div aria-hidden className="bg-blueprint pointer-events-none absolute inset-0" />
      )}
      <div className="relative">{children}</div>
    </section>
  );
}
