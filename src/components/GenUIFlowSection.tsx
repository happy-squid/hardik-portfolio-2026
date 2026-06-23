import type { MediaSection } from '../data/airport';
import { CaseStudySection } from './CaseStudySection';
import { ZoomableImage } from './ZoomableImage';

const FLOW_POINTS = [
  {
    label: 'At this moment, the passenger needs',
    text: 'To understand their flight status, route, and assistance options without switching systems.',
  },
  {
    label: 'This response helps by',
    text: 'Combining flight data, navigation, and service assistance into one contextual response.',
  },
  {
    label: 'This reduces',
    text: 'The need to search through boards, staff, apps, and signage separately.',
  },
] as const;

/**
 * GenUIFlowSection shows the interaction model: one passenger request returning
 * several coordinated actions. Two columns on desktop (text + screen),
 * stacked on mobile. Screen-first explanation points sit below the body copy.
 */
export function GenUIFlowSection({ data }: { data: MediaSection }) {
  return (
    <CaseStudySection id="genui-flow" heading={data.heading}>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
        {/* Left column: body + three explanation points */}
        <div className="space-y-6">
          <p className="text-base leading-relaxed text-neutral-700">{data.body}</p>

          <ul className="space-y-4 border-t border-neutral-100 pt-5">
            {FLOW_POINTS.map((point) => (
              <li key={point.label}>
                <p className="text-xs font-medium uppercase tracking-wider text-neutral-400">
                  {point.label}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-neutral-700">
                  {point.text}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Right column: screen */}
        <ZoomableImage
          src={data.media.src}
          alt={data.media.alt}
          caption={data.media.caption}
          className="mx-auto w-full max-w-[420px]"
        />
      </div>
    </CaseStudySection>
  );
}
