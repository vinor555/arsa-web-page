import type { ReactNode } from 'react';
import { Eyebrow } from '@/components/atoms';
import { cn } from '@/lib/cn';

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  onDark?: boolean;
  className?: string;
}

/** Bloque de encabezado reutilizado por todas las secciones. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  onDark = false,
  className,
}: SectionHeadingProps) {
  return (
    <header
      className={cn(
        'flex flex-col gap-4',
        align === 'center' && 'items-center text-center',
        className,
      )}
    >
      {eyebrow && <Eyebrow onDark={onDark}>{eyebrow}</Eyebrow>}
      <h2
        className={cn(
          'text-3xl leading-[1.1] sm:text-4xl lg:text-5xl',
          onDark && 'text-white',
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'max-w-2xl text-base leading-relaxed sm:text-lg',
            onDark ? 'text-petrol-200' : 'text-steel-600',
          )}
        >
          {description}
        </p>
      )}
    </header>
  );
}
