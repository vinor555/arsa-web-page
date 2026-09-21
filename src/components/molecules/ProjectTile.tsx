import { Expand } from 'lucide-react';
import type { Project } from '@/data/projects';

interface ProjectTileProps {
  project: Project;
  onOpen: () => void;
}

/** Miniatura de la galería. Al activarla abre la foto completa. */
export function ProjectTile({ project, onOpen }: ProjectTileProps) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group relative block aspect-[4/3] w-full overflow-hidden rounded-lg bg-petrol-900 text-left"
    >
      <img
        src={project.thumb}
        alt=""
        width={800}
        height={600}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
      />
      <span
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-petrol-950/90 via-petrol-950/20 to-transparent"
      />
      <span className="absolute inset-x-0 bottom-0 flex flex-col gap-0.5 p-3 sm:p-4">
        <span className="hidden text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-ember-400 sm:block">
          {project.category}
        </span>
        <span className="text-xs font-medium leading-snug text-white sm:text-sm">
          {project.title}
        </span>
      </span>
      <span
        aria-hidden
        className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-petrol-950/60 text-white opacity-0 backdrop-blur-sm transition group-hover:opacity-100 group-focus-visible:opacity-100"
      >
        <Expand className="h-4 w-4" />
      </span>
      <span className="sr-only">. Ampliar foto</span>
    </button>
  );
}
