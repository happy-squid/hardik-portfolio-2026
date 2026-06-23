import type { SolutionPreview as SolutionPreviewData } from '../data/zomato';
import { CaseStudySection } from './CaseStudySection';
import { ZoomableImage } from './ZoomableImage';

/**
 * SolutionPreview shows the payoff screen early, using a screen-first
 * explanation beside the prototype. Three optional breakdown points annotate
 * key UI elements without decorative callout lines.
 *
 * Desktop: two columns (explanation + prototype).
 * Mobile: stacked, prototype after text.
 */
export function SolutionPreview({ data }: { data: SolutionPreviewData }) {
  return (
    <CaseStudySection id="solution-preview" heading={data.heading}>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
        {/* Left: screen-first explanation + breakdown points */}
        <div className="space-y-6">
          <div className="space-y-4 text-base leading-relaxed text-neutral-700">
            <p>
              At this moment, the rider needs{' '}
              <span className="font-medium text-[#111]">{data.need}</span>.
            </p>
            <p>This screen helps by {data.mechanism}.</p>
            <p>This reduces {data.reduces}.</p>
          </div>

          {data.screenBreakdown && data.screenBreakdown.length > 0 && (
            <ul className="space-y-3 border-t border-neutral-100 pt-5">
              {data.screenBreakdown.map((point) => (
                <li key={point.title} className="flex gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-[10px] font-semibold text-neutral-500">
                    ↳
                  </span>
                  <span className="text-sm leading-relaxed text-neutral-600">
                    <span className="font-medium text-[#111]">{point.title}. </span>
                    {point.text}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Right: prototype screen */}
        <ZoomableImage
          src={data.media.src}
          alt={data.media.alt}
          caption={data.media.caption}
          className="mx-auto w-full max-w-[360px]"
        />
      </div>
    </CaseStudySection>
  );
}
