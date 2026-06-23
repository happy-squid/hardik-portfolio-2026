import { Link } from 'react-router-dom';
import { Reading } from './Layout';

interface ProjectFooterNavProps {
  /** Contact email used for the primary "Email me" CTA. */
  email: string;
  /** Route to the other case study (internal react-router path). */
  otherProjectHref: string;
  /** Title of the other case study. */
  otherProjectTitle: string;
  /** One-line description of the other case study. */
  otherProjectDescription: string;
  /** Small label above the other project card. */
  otherProjectLabel?: string;
  /** Closing CTA heading (defaults to the shared portfolio copy). */
  heading?: string;
  /** Closing CTA body (defaults to the shared portfolio copy). */
  body?: string;
}

const DEFAULT_HEADING = 'Interested in this kind of work?';
const DEFAULT_BODY =
  'I’m looking for product, UI-UX, and interaction design roles where I can work on clear flows, useful interfaces, and systems that connect digital and physical experiences.';

/**
 * ProjectFooterNav is the shared closing section for case-study pages. It gives
 * readers clear exits at the end of a long page: email the author, return home,
 * or open the other case study. All links are real anchors / router Links with
 * visible labels and focus states (no hover-only information).
 */
export function ProjectFooterNav({
  email,
  otherProjectHref,
  otherProjectTitle,
  otherProjectDescription,
  otherProjectLabel = 'Next case study',
  heading = DEFAULT_HEADING,
  body = DEFAULT_BODY,
}: ProjectFooterNavProps) {
  return (
    <footer
      aria-labelledby="project-footer-heading"
      className="border-t border-neutral-200 pt-10 sm:pt-12"
    >
      {/* Closing CTA block */}
      <Reading className="space-y-4">
        <h2
          id="project-footer-heading"
          className="text-xl font-semibold text-[#111] sm:text-2xl"
        >
          {heading}
        </h2>
        <p className="text-base leading-relaxed text-neutral-600">{body}</p>
        <div className="pt-1">
          <a
            href={`mailto:${email}`}
            className="inline-flex min-h-[44px] items-center rounded-full bg-[#111] px-5 text-sm font-medium text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111]"
          >
            Email me
          </a>
        </div>
      </Reading>

      {/* Navigation cards */}
      <nav
        aria-label="Continue browsing"
        className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2"
      >
        <Link
          to="/"
          className="group flex min-h-[44px] flex-col justify-between gap-2 rounded-xl border border-neutral-200 p-5 transition-colors hover:border-neutral-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111]"
        >
          <span className="text-xs font-medium uppercase tracking-wide text-neutral-500">
            Homepage
          </span>
          <span className="text-base font-semibold text-[#111]">Back to home</span>
          <span
            aria-hidden="true"
            className="text-sm font-medium text-[#111] underline underline-offset-4 group-hover:text-neutral-600"
          >
            ← Return to homepage
          </span>
        </Link>

        <Link
          to={otherProjectHref}
          className="group flex min-h-[44px] flex-col gap-2 rounded-xl border border-neutral-200 p-5 transition-colors hover:border-neutral-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111]"
        >
          <span className="text-xs font-medium uppercase tracking-wide text-neutral-500">
            {otherProjectLabel}
          </span>
          <span className="text-base font-semibold leading-snug text-[#111]">
            {otherProjectTitle}
          </span>
          <span className="text-sm leading-relaxed text-neutral-600">
            {otherProjectDescription}
          </span>
          <span
            aria-hidden="true"
            className="mt-auto pt-1 text-sm font-medium text-[#111] underline underline-offset-4 group-hover:text-neutral-600"
          >
            View case study →
          </span>
        </Link>
      </nav>
    </footer>
  );
}
