import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/cn';

type Variant = 'primary' | 'secondary' | 'ghost' | 'whatsapp';
type Size = 'sm' | 'md' | 'lg';

const base =
  'inline-flex items-center justify-center gap-2 rounded-md font-semibold tracking-wide transition duration-200 disabled:pointer-events-none disabled:opacity-60';

const variants: Record<Variant, string> = {
  primary: 'bg-ember-500 text-white shadow-card hover:bg-ember-600 active:bg-ember-700',
  secondary: 'bg-petrol-900 text-white hover:bg-petrol-800 active:bg-petrol-950',
  ghost:
    'border border-white/30 bg-white/5 text-white backdrop-blur-sm hover:border-white/60 hover:bg-white/10',
  whatsapp: 'bg-[#25D366] text-[#04301b] shadow-card hover:bg-[#1eb757]',
};

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm sm:text-base',
  lg: 'px-7 py-3.5 text-base',
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & { href?: undefined };

type ButtonAsLink = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & { href: string };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

/**
 * Renderiza un `<a>` cuando recibe `href` y un `<button>` en caso contrario,
 * de modo que los enlaces conserven su semántica y su comportamiento nativo.
 */
export function Button({ variant = 'primary', size = 'md', className, children, ...props }: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (typeof props.href === 'string') {
    const { href, ...anchorProps } = props as ButtonAsLink;
    const isExternal = /^(https?:|mailto:|tel:)/.test(href);

    return (
      <a
        href={href}
        className={classes}
        {...(isExternal && !href.startsWith('mailto:') && !href.startsWith('tel:')
          ? { target: '_blank', rel: 'noopener noreferrer' }
          : null)}
        {...anchorProps}
      >
        {children}
      </a>
    );
  }

  const { type = 'button', ...buttonProps } = props as ButtonAsButton;
  return (
    <button type={type} className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
