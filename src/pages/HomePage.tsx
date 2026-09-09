import { About, Contact, CtaBanner, Hero, Process, Sectors, Services } from '@/components/organisms';
import { MainLayout } from '@/components/templates';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { site } from '@/data/site';

export default function HomePage() {
  useDocumentTitle(`${site.name} · ${site.tagline} en ${site.country}`);

  return (
    <MainLayout>
      <Hero />
      <About />
      <Services />
      <CtaBanner />
      <Sectors />
      <Process />
      <Contact />
    </MainLayout>
  );
}
