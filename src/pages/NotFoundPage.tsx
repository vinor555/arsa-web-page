import { ArrowLeft } from 'lucide-react';
import { Button, Container } from '@/components/atoms';
import { MainLayout } from '@/components/templates';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { site } from '@/data/site';

export default function NotFoundPage() {
  useDocumentTitle(`Página no encontrada · ${site.name}`);

  return (
    <MainLayout>
      <Container className="flex min-h-[70vh] flex-col items-center justify-center gap-6 py-32 text-center">
        <p className="font-display text-7xl font-bold text-ember-500">404</p>
        <h1 className="text-3xl sm:text-4xl">Esta página no existe</h1>
        <p className="max-w-md text-steel-600">
          Es posible que el enlace haya cambiado. Vuelva al inicio para encontrar lo que busca.
        </p>
        <Button href={import.meta.env.BASE_URL} size="lg">
          <ArrowLeft className="h-4 w-4" aria-hidden />
          Volver al inicio
        </Button>
      </Container>
    </MainLayout>
  );
}
