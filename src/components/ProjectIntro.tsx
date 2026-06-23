import { Reading } from './Layout';
import { ZoomableImage } from './ZoomableImage';

interface ProjectIntroProps {
  heading: string;
  body: string;
  systemMap: {
    src: string | null;
    alt: string;
  };
}

/**
 * ProjectIntro renders the overview section (heading + body at reading width),
 * followed by the system-map image when one is provided. When systemMap.src is
 * null the section is text-only — no placeholder is shown so there is no
 * visual gap between this section and the one that follows.
 */
export function ProjectIntro({ heading, body, systemMap }: ProjectIntroProps) {
  return (
    <section aria-labelledby="intro-heading" className="space-y-8">
      <Reading>
        <h2
          id="intro-heading"
          className="text-xl font-semibold text-[#111] sm:text-2xl"
        >
          {heading}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-neutral-600">
          {body}
        </p>
      </Reading>

      {systemMap.src && (
        <ZoomableImage
          src={systemMap.src}
          alt={systemMap.alt}
          className="w-full"
        />
      )}
    </section>
  );
}
