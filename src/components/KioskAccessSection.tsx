import type { KioskSection } from '../data/airport';
import { CaseStudySection } from './CaseStudySection';
import { ZoomableImage } from './ZoomableImage';

/**
 * KioskAccessSection shows the physical entry point and the kiosk → phone
 * handoff. The primary image sits wide; the secondary booking composite is
 * zoomable because it contains small UI detail. Images stack on mobile.
 */
export function KioskAccessSection({ data }: { data: KioskSection }) {
  return (
    <CaseStudySection id="kiosk-access" heading={data.heading} lead={data.body}>
      <ZoomableImage
        src={data.primaryMedia.src}
        alt={data.primaryMedia.alt}
        caption={data.primaryMedia.caption}
        className="w-full"
      />

      <ZoomableImage
        src={data.secondaryMedia.src}
        alt={data.secondaryMedia.alt}
        caption={data.secondaryMedia.caption}
        className="w-full"
      />
    </CaseStudySection>
  );
}
