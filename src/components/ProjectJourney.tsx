import type { CurrentJourney } from '../data/zomato';
import { CaseStudySection } from './CaseStudySection';
import { ZoomableImage } from './ZoomableImage';

/**
 * ProjectJourney renders the current rider journey and the "delivery gap".
 * The journey map is wide and detailed, so it uses ZoomableImage (object-contain,
 * pinch/keyboard zoom) with a caption pointing out what to notice.
 */
export function ProjectJourney({ data }: { data: CurrentJourney }) {
  return (
    <CaseStudySection id="current-journey" heading={data.heading} lead={data.body}>
      <ZoomableImage
        src={data.media.src}
        alt={data.media.alt}
        caption={data.media.caption}
        className="w-full"
      />
    </CaseStudySection>
  );
}
