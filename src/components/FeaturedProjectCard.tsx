import { Link } from 'react-router-dom';
import type { FeaturedProject } from '../data/home';

/**
 * FeaturedProjectCard is a single clickable case-study card. The whole card is a
 * semantic Link to the project route; all information is visible without hover.
 */
export function FeaturedProjectCard({ project }: { project: FeaturedProject }) {
  return (
    <Link
      to={project.href}
      className="group flex flex-col overflow-hidden rounded-xl border border-neutral-200 transition-colors hover:border-neutral-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111]"
    >
      <div className="aspect-[16/10] w-full overflow-hidden bg-neutral-100">
        <img
          src={project.thumbnail.src}
          alt={project.thumbnail.alt}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-lg font-semibold leading-snug text-[#111]">
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed text-neutral-600">
          {project.description}
        </p>

        <ul className="flex flex-wrap gap-2 pt-1">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-neutral-200 px-2.5 py-1 text-xs text-neutral-500"
            >
              {tag}
            </li>
          ))}
        </ul>

        <p className="mt-auto border-t border-neutral-100 pt-3 text-sm leading-relaxed text-neutral-500">
          {project.proof}
        </p>

        <span
          aria-hidden="true"
          className="text-sm font-medium text-[#111] underline underline-offset-4 group-hover:text-neutral-600"
        >
          View case study →
        </span>
      </div>
    </Link>
  );
}
