import type { ElementType, ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface ContainerProps {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}

/** Ancho máximo y respiración horizontal comunes a todas las secciones. */
export function Container({ as: Tag = 'div', className, children }: ContainerProps) {
  return <Tag className={cn('mx-auto w-full max-w-7xl px-5 sm:px-8', className)}>{children}</Tag>;
}
