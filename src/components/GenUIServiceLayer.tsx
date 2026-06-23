import type { MediaSection } from '../data/airport';
import { CaseStudySection } from './CaseStudySection';
import { Reading } from './Layout';
import { ZoomableImage } from './ZoomableImage';

const NOTICE_POINTS = [
  {
    title: 'Context decides the card',
    text: 'The interface changes based on flight, location, and passenger need.',
  },
  {
    title: 'Cards replace menu-hunting',
    text: "Passengers do not have to search through a deep airport app.",
  },
  {
    title: 'Each card leads to action',
    text: 'Navigation, assistance, booking, gate change, and baggage cards each support a next step.',
  },
] as const;

/**
 * GenUIServiceLayer shows the GenUI card system as a single coordinated layer.
 * The explanation sits above a wide, zoomable figure followed by three
 * "what to notice" bullets that explain the design intent of the card system.
 */
export function GenUIServiceLayer({ data }: { data: MediaSection }) {
  return (
    <CaseStudySection id="service-layer" heading={data.heading} lead={data.body}>
      <ZoomableImage
        src={data.media.src}
        alt={data.media.alt}
        caption={data.media.caption}
        className="w-full"
      />

      <Reading>
        <ul className="space-y-4">
          {NOTICE_POINTS.map((point, index) => (
            <li key={point.title} className="flex gap-3">
              <span
                aria-hidden="true"
                className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-[10px] font-semibold text-neutral-500"
              >
                {index + 1}
              </span>
              <span className="text-sm leading-relaxed text-neutral-700">
                <span className="font-medium text-[#111]">{point.title}. </span>
                {point.text}
              </span>
            </li>
          ))}
        </ul>
      </Reading>
    </CaseStudySection>
  );
}
