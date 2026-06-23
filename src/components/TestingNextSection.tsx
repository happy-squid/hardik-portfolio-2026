import type { TextSection } from '../data/airport';
import { CaseStudySection } from './CaseStudySection';

/**
 * TestingNextSection keeps the project honest: a text-only, reading-width note
 * that this was a thesis prototype, not a deployed airport system, and what a
 * real pilot would test next.
 */
export function TestingNextSection({ data }: { data: TextSection }) {
  return (
    <CaseStudySection id="testing-next" heading={data.heading} lead={data.body}>
      {null}
    </CaseStudySection>
  );
}
