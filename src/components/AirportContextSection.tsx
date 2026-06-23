import type { MediaSection } from '../data/airport';
import { CaseStudySection } from './CaseStudySection';
import { ZoomableImage } from './ZoomableImage';

/**
 * AirportContextSection establishes the group project context and the
 * individual contribution. An ownership clarification strip follows the image
 * so it is impossible to misread the contribution split.
 */
export function AirportContextSection({ data }: { data: MediaSection }) {
  return (
    <CaseStudySection id="airport-context" heading={data.heading} lead={data.body}>
      <ZoomableImage
        src={data.media.src}
        alt={data.media.alt}
        caption={data.media.caption}
        className="w-full"
      />

      {/* Ownership clarification — two restrained cards, not a warning box */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:max-w-[640px]">
        <div className="rounded-lg border border-neutral-200 p-4 space-y-1">
          <p className="text-xs font-medium uppercase tracking-wider text-neutral-400">
            My contribution
          </p>
          <p className="text-sm leading-relaxed text-neutral-700">
            GenUI cards, kiosk interaction, vehicle screen interfaces, and passenger guidance touchpoints.
          </p>
        </div>
        <div className="rounded-lg border border-neutral-200 p-4 space-y-1">
          <p className="text-xs font-medium uppercase tracking-wider text-neutral-400">
            Team context
          </p>
          <p className="text-sm leading-relaxed text-neutral-700">
            Vehicle bodies and mobility concepts were developed as part of the group thesis.
          </p>
        </div>
      </div>
    </CaseStudySection>
  );
}
