import type { DesignDecisionsSection } from '../data/airport';
import { CaseStudySection } from './CaseStudySection';

/**
 * DesignDecisionCards shows design judgement as compact decision cards
 * (why → decision → tradeoff). Two columns on desktop, stacked on mobile.
 * Kept short on purpose so it reads as reasoning, not an essay.
 */
export function DesignDecisionCards({ data }: { data: DesignDecisionsSection }) {
  return (
    <CaseStudySection id="design-decisions" heading={data.heading}>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {data.decisions.map((decision) => (
          <article
            key={decision.title}
            className="space-y-3 rounded-lg border border-neutral-200 p-5"
          >
            <h3 className="text-base font-semibold text-[#111]">
              {decision.title}
            </h3>
            <p className="text-sm leading-relaxed text-neutral-600">
              <span className="font-medium text-neutral-500">Why. </span>
              {decision.why}
            </p>
            <p className="text-sm leading-relaxed text-neutral-600">
              <span className="font-medium text-neutral-500">Decision. </span>
              {decision.decision}
            </p>
            <p className="text-sm leading-relaxed text-neutral-600">
              <span className="font-medium text-neutral-500">Tradeoff. </span>
              {decision.tradeoff}
            </p>
          </article>
        ))}
      </div>
    </CaseStudySection>
  );
}
