import type { VehicleScreensSection } from '../data/airport';
import { CaseStudySection } from './CaseStudySection';
import { ZoomableImage } from './ZoomableImage';

/**
 * VehicleScreensGrid shows non-phone interaction design across surfaces.
 * Each card pairs a screen image with its breakdown point so the page makes
 * clear that information density changes by surface (exterior → interior →
 * in-ride). Three columns on desktop, stacked on mobile.
 *
 * media[] and screenBreakdown[] are aligned by index in the data.
 */
export function VehicleScreensGrid({ data }: { data: VehicleScreensSection }) {
  return (
    <CaseStudySection id="vehicle-screens" heading={data.heading} lead={data.body}>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {data.media.map((media, index) => {
          const point = data.screenBreakdown[index];
          return (
            <article
              key={media.src}
              className="flex flex-col overflow-hidden rounded-lg border border-neutral-200"
            >
              <ZoomableImage
                src={media.src}
                alt={media.alt}
                className="bg-neutral-50"
                zoomHint={false}
              />
              <div className="space-y-1 p-4">
                <h3 className="text-base font-semibold text-[#111]">
                  {point ? point.title : media.caption}
                </h3>
                {point && (
                  <p className="text-sm leading-relaxed text-neutral-600">
                    {point.text}
                  </p>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </CaseStudySection>
  );
}
