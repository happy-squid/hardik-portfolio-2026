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
 * ProjectIntro renders the "Who is this centered around?" section,
 * constrained to a comfortable reading width, followed by the system-map image.
 */
export function ProjectIntro({ heading, body, systemMap }: ProjectIntroProps) {
  return (
    <section aria-labelledby="intro-heading" className="space-y-6">
      <div className="max-w-[65ch]">
        <h2
          id="intro-heading"
          className="text-xl font-semibold text-[#111] sm:text-2xl"
        >
          {heading}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-neutral-600">
          {body}
        </p>
      </div>

      {systemMap.src ? (
        <ZoomableImage
          src={systemMap.src}
          alt={systemMap.alt}
          className="w-full"
        />
      ) : (
        <SystemMapPlaceholder alt={systemMap.alt} />
      )}
    </section>
  );
}

function SystemMapPlaceholder({ alt }: { alt: string }) {
  return (
    <figure
      role="img"
      aria-label={alt}
      className="flex aspect-[16/9] w-full items-center justify-center rounded-lg border border-dashed border-neutral-300 bg-neutral-50"
    >
      <figcaption className="max-w-[40ch] text-center text-sm text-neutral-400">
        System-map asset pending.
        <br />
        Replace <code className="rounded bg-neutral-200 px-1 py-0.5 text-xs">src/assets/system-map.png</code> and update{' '}
        <code className="rounded bg-neutral-200 px-1 py-0.5 text-xs">src/data/zomato.ts → systemMap.src</code>.
      </figcaption>
    </figure>
  );
}
