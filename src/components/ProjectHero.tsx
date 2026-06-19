interface ProjectHeroProps {
  title: string;
  promise: string;
  heroAlt: string;
  /** Path to a looping background video (served from /public). Optional. */
  heroVideo?: string;
}

/**
 * ProjectHero renders the project title, one-line promise, and hero media.
 * When heroVideo is supplied the video plays silently on loop with no controls.
 * Aspect ratio: 4/3 on mobile, 16/7 on md+ breakpoint.
 */
export function ProjectHero({ title, promise, heroAlt, heroVideo }: ProjectHeroProps) {
  return (
    <section aria-label="Project overview">
      {/* Title and promise */}
      <div className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight text-[#111] sm:text-4xl lg:text-[2.75rem]">
          {title}
        </h1>
        <p className="mt-3 text-base text-neutral-500 sm:text-lg">
          {promise}
        </p>
      </div>

      {/* Hero media — aspect ratio switches at md breakpoint */}
      <div
        className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-neutral-100 md:aspect-[16/7]"
      >
        {heroVideo ? (
          <video
            src={heroVideo}
            aria-label={heroAlt}
            autoPlay
            loop
            muted
            playsInline
            disablePictureInPicture
            className="h-full w-full object-cover"
          />
        ) : (
          <div
            role="img"
            aria-label={heroAlt}
            className="flex h-full w-full items-center justify-center"
          >
            <span className="text-sm text-neutral-400">
              Product screen composition — asset pending
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
