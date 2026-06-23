import type { ReactNode } from 'react';
import { Reading } from './Layout';

interface CaseStudySectionProps {
  /** Stable id used to wire the heading to the section via aria-labelledby. */
  id: string;
  heading: string;
  /** Optional lead paragraph rendered under the heading at reading width. */
  lead?: ReactNode;
  children: ReactNode;
  className?: string;
}

/**
 * CaseStudySection is a thin, semantic wrapper for case-study content blocks.
 * It renders an accessible <section> with an <h2>, an optional reading-width
 * lead, and children below. Spacing matches the existing ProjectIntro rhythm so
 * sections stay visually consistent without a heavy design system.
 */
export function CaseStudySection({
  id,
  heading,
  lead,
  children,
  className,
}: CaseStudySectionProps) {
  const headingId = `${id}-heading`;
  return (
    <section
      aria-labelledby={headingId}
      className={['space-y-8', className ?? ''].join(' ')}
    >
      <Reading>
        <h2
          id={headingId}
          className="text-xl font-semibold text-[#111] sm:text-2xl"
        >
          {heading}
        </h2>
        {lead && (
          <p className="mt-4 text-base leading-relaxed text-neutral-600">
            {lead}
          </p>
        )}
      </Reading>

      {children}
    </section>
  );
}
