import { useEffect, useRef, type KeyboardEvent, type MouseEvent, type SyntheticEvent } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export interface LightboxItem {
  src: string;
  alt: string;
  caption: string;
  eyebrow?: string;
  width: number;
  height: number;
}

interface LightboxProps {
  items: LightboxItem[];
  /** Índice abierto; `null` mantiene el visor cerrado. */
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
  label: string;
}

const navButton =
  'absolute top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20';

/**
 * Visor de fotos a pantalla completa sobre `<dialog>` nativo: el navegador
 * resuelve el foco, el cierre con Escape y el bloqueo del resto de la página.
 */
export function Lightbox({ items, index, onClose, onNavigate, label }: LightboxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const isOpen = index !== null;
  const item = index !== null ? items[index] : null;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (index !== null && !dialog.open) dialog.showModal();
    if (index === null && dialog.open) dialog.close();
  }, [index]);

  // Con el visor abierto la página de fondo no debe desplazarse.
  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const step = (delta: number) => {
    if (index === null) return;
    onNavigate((index + delta + items.length) % items.length);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === 'ArrowRight') step(1);
    if (event.key === 'ArrowLeft') step(-1);
  };

  // Escape cierra por el mismo camino que el botón, sin esperar al evento
  // `close`, que el navegador entrega de forma asíncrona.
  const handleCancel = (event: SyntheticEvent<HTMLDialogElement>) => {
    event.preventDefault();
    onClose();
  };

  // Un clic en el espacio vacío alrededor de la foto cierra el visor.
  const handleBackdropClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) onClose();
  };

  return (
    <dialog
      ref={dialogRef}
      aria-label={label}
      onCancel={handleCancel}
      onClose={onClose}
      onKeyDown={handleKeyDown}
      className="m-0 h-dvh max-h-none w-screen max-w-none bg-petrol-950/97 p-0"
    >
      {item && index !== null && (
        <div
          onClick={handleBackdropClick}
          className="relative flex h-full w-full items-center justify-center px-4 py-16 sm:px-20"
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar"
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={() => step(-1)}
            aria-label="Foto anterior"
            className={`${navButton} left-2 sm:left-5`}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <figure className="flex max-h-full flex-col items-center gap-4">
            <img
              src={item.src}
              alt={item.alt}
              width={item.width}
              height={item.height}
              className="max-h-[calc(100dvh-12rem)] w-auto max-w-full rounded-md object-contain shadow-lift"
            />
            <figcaption className="text-center">
              {item.eyebrow && (
                <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-ember-400">
                  {item.eyebrow}
                </span>
              )}
              <span className="mt-1 block text-base text-white">{item.caption}</span>
              <span className="mt-1 block text-xs tabular-nums text-petrol-300">
                {index + 1} de {items.length}
              </span>
            </figcaption>
          </figure>

          <button
            type="button"
            onClick={() => step(1)}
            aria-label="Foto siguiente"
            className={`${navButton} right-2 sm:right-5`}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </dialog>
  );
}
