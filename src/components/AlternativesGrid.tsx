import type { Alternative } from '../data/zomato';
import { CaseStudySection } from './CaseStudySection';
import { ZoomableImage } from './ZoomableImage';

/**
 * AlternativesGrid shows directions that were explored and dropped/parked, as
 * compact cards: two columns on desktop, stacked on mobile. It stays small on
 * purpose so it reads as design judgement, not a second research section.
 */
export function AlternativesGrid({ items }: { items: Alternative[] }) {
  return (
    <CaseStudySection id="alternatives" heading="Alternatives explored">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {items.map((item) => (
          <AlternativeCard key={item.title} data={item} />
        ))}
      </div>
    </CaseStudySection>
  );
}

function AlternativeCard({ data }: { data: Alternative }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-lg border border-neutral-200">
      <ZoomableImage
        src={data.media.src}
        alt={data.media.alt}
        className="bg-neutral-50"
        zoomHint={false}
      />
      <div className="space-y-2 p-4">
        <h3 className="text-base font-semibold text-[#111]">{data.title}</h3>
        <p className="text-sm leading-relaxed text-neutral-600">
          <span className="font-medium text-neutral-500">Why explored. </span>
          {data.whyExplored}
        </p>
        <p className="text-sm leading-relaxed text-neutral-600">
          <span className="font-medium text-neutral-500">Outcome. </span>
          {data.outcome}
        </p>
      </div>
    </article>
  );
}
