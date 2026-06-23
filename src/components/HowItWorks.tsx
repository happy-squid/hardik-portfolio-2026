import type { HowItWorks as HowItWorksData } from '../data/zomato';
import { CaseStudySection } from './CaseStudySection';
import { Reading } from './Layout';
import { ZoomableImage } from './ZoomableImage';

/**
 * HowItWorks explains the system behind the screen: a short intro, a three-step
 * sequence, and the wide proposed-flow diagram. The diagram is tall, so its
 * inline height is capped while full detail stays available via zoom.
 */
export function HowItWorks({ data }: { data: HowItWorksData }) {
  return (
    <CaseStudySection id="how-it-works" heading={data.heading} lead={data.body}>
      <Reading>
        <ol className="space-y-3">
          {data.steps.map((step, index) => (
            <li key={index} className="flex gap-3">
              <span
                aria-hidden="true"
                className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#111] text-xs font-medium text-white"
              >
                {index + 1}
              </span>
              <span className="text-base leading-relaxed text-neutral-700">
                {step}
              </span>
            </li>
          ))}
        </ol>
      </Reading>

      <ZoomableImage
        src={data.media.src}
        alt={data.media.alt}
        caption={data.media.caption}
        className="w-full"
        maxHeightClass="max-h-[640px]"
      />
    </CaseStudySection>
  );
}
