import { useState } from 'react';
import { Container, Section } from '@/components/atoms';
import { Lightbox, ProjectTile, SectionHeading, type LightboxItem } from '@/components/molecules';
import { projects } from '@/data/projects';

const lightboxItems: LightboxItem[] = projects.map((project) => ({
  src: project.full,
  alt: project.title,
  caption: project.title,
  eyebrow: project.category,
  width: project.width,
  height: project.height,
}));

/** Galería de trabajos realizados por ARSA. */
export function Projects() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section id="proyectos" tone="dark">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          onDark
          eyebrow="Proyectos"
          title="Trabajo real, en campo"
          description="Una muestra de lo que hacemos a diario: calibraciones, sandblasting, fabricación de tanques, trasiego y montaje de equipos."
        />

        <ul className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          {projects.map((project, index) => (
            <li key={project.id}>
              <ProjectTile project={project} onOpen={() => setOpenIndex(index)} />
            </li>
          ))}
        </ul>
      </Container>

      <Lightbox
        label="Galería de proyectos"
        items={lightboxItems}
        index={openIndex}
        onClose={() => setOpenIndex(null)}
        onNavigate={setOpenIndex}
      />
    </Section>
  );
}
