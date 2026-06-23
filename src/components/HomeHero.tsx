import { Reading } from './Layout';
import type { HomePageData } from '../data/home';

/**
 * HomeHero states role and relevance in the first screen. Text is kept to a
 * reading width and the section stays compact so featured work appears soon.
 * CTAs are real anchor links to in-page section ids.
 */
export function HomeHero({
  hero,
  resumeUrl,
}: {
  hero: HomePageData['hero'];
  resumeUrl?: string;
}) {
  return (
    <section aria-labelledby="hero-heading">
      <Reading className="space-y-5">
        <h1
          id="hero-heading"
          className="text-3xl font-semibold tracking-tight text-[#111] sm:text-4xl"
        >
          {hero.heading}
        </h1>
        <p className="text-lg leading-relaxed text-neutral-700">{hero.main}</p>
        <p className="text-base leading-relaxed text-neutral-500">
          {hero.supporting}
        </p>

        <div className="flex flex-wrap gap-3 pt-1">
          <a
            href="#work"
            className="inline-flex min-h-[44px] items-center rounded-full bg-[#111] px-5 text-sm font-medium text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111]"
          >
            View work
          </a>
          <a
            href="#contact"
            className="inline-flex min-h-[44px] items-center rounded-full border border-neutral-300 px-5 text-sm font-medium text-[#111] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111]"
          >
            Contact
          </a>
          {resumeUrl && (
            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[44px] items-center rounded-full border border-neutral-300 px-5 text-sm font-medium text-[#111] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111]"
            >
              Resume
            </a>
          )}
        </div>
      </Reading>
    </section>
  );
}
