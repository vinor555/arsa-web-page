import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { cn } from '@/lib/cn';
import { whatsappUrl } from '@/data/site';

/** Botón flotante de WhatsApp; aparece al dejar atrás el hero. */
export function WhatsAppFab() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir a ARSA por WhatsApp"
      className={cn(
        'fixed bottom-6 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lift transition duration-300 hover:scale-105 sm:bottom-8 sm:right-8',
        isVisible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0',
      )}
    >
      <MessageCircle className="h-7 w-7" strokeWidth={1.75} aria-hidden />
    </a>
  );
}
