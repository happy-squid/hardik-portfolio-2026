import type { Evidence } from '../data/zomato';
import { CaseStudySection } from './CaseStudySection';
import { Reading } from './Layout';
import { ZoomableImage } from './ZoomableImage';

/**
 * ProjectEvidence presents the problem as claim → evidence → design response,
 * backed by optional compact stat cards and the survey image. The sample note
 * keeps the survey framed as directional evidence, never a deployment metric.
 */
export function ProjectEvidence({ data }: { data: Evidence }) {
  return (
    <CaseStudySection id="evidence" heading={data.heading}>
      <Reading className="space-y-4">
        <p className="text-base leading-relaxed text-neutral-700">
          <span className="font-medium text-[#111]">Claim. </span>
          {data.claim}
        </p>
        <p className="text-base leading-relaxed text-neutral-600">
          {data.evidence}
        </p>
        <p className="text-base leading-relaxed text-neutral-600">
          <span className="font-medium text-[#111]">Design response. </span>
          {data.designResponse}
        </p>
      </Reading>

      {data.cards && data.cards.length > 0 && (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:max-w-[640px]">
          {data.cards.map((card) => (
            <div
              key={card.label}
              className="rounded-lg border border-neutral-200 p-4 space-y-1"
            >
              <p className="text-xs font-medium uppercase tracking-wider text-neutral-400">
                {card.label}
              </p>
              <p className="text-2xl font-semibold text-[#111]">{card.value}</p>
              <p className="text-sm leading-relaxed text-neutral-600">{card.text}</p>
            </div>
          ))}
        </div>
      )}

      <ZoomableImage
        src={data.media.src}
        alt={data.media.alt}
        caption={data.media.caption}
        className="w-full max-w-[640px]"
      />

      <Reading>
        <p className="text-xs leading-relaxed text-neutral-400">
          {data.sampleNote}
        </p>
      </Reading>
    </CaseStudySection>
  );
}
