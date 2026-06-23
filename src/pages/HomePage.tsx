import { Container } from '../components/Layout';
import { HomeHero } from '../components/HomeHero';
import { FeaturedProjectCard } from '../components/FeaturedProjectCard';
import { CapabilityGrid } from '../components/CapabilityGrid';
import { ToolStrip } from '../components/ToolStrip';
import { ContactSection } from '../components/ContactSection';
import { homePageData } from '../data/home';

/**
 * HomePage is the V1 portfolio landing page. It uses its own semantic header
 * with in-page nav (the shared AppShell header has no nav and is used by the
 * project pages, so it is left untouched here). Layout primitives Container and
 * Reading are reused for visual consistency with the case studies.
 */
export function HomePage() {
  const data = homePageData;

  return (
    <div className="min-h-screen bg-white text-[#111]">
      <header className="border-b border-neutral-200 py-4">
        <Container>
          <nav aria-label="Primary" className="flex items-center justify-between gap-4">
            <a
              href="#top"
              className="inline-block rounded-full border border-neutral-300 px-3 py-1 text-xs font-medium tracking-wide text-neutral-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111]"
            >
              {data.name}
            </a>
            <ul className="flex items-center gap-5 text-sm text-neutral-600">
              <li>
                <a
                  href="#work"
                  className="hover:text-[#111] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111]"
                >
                  Work
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-[#111] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111]"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </Container>
      </header>

      <main id="top">
        <Container>
          <div className="space-y-16 py-10 sm:space-y-20 sm:py-14 lg:py-16">
            {/* Hero */}
            <HomeHero hero={data.hero} resumeUrl={data.resumeUrl} />

            {/* Featured work */}
            <section id="work" aria-labelledby="work-heading" className="space-y-6">
              <h2
                id="work-heading"
                className="text-xl font-semibold text-[#111] sm:text-2xl"
              >
                Featured work
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {data.featuredProjects.map((project) => (
                  <FeaturedProjectCard key={project.href} project={project} />
                ))}
              </div>
            </section>

            {/* What I bring */}
            <section aria-labelledby="bring-heading" className="space-y-6">
              <h2
                id="bring-heading"
                className="text-xl font-semibold text-[#111] sm:text-2xl"
              >
                What I bring
              </h2>
              <CapabilityGrid capabilities={data.capabilities} />
            </section>

            {/* Tool stack */}
            <section aria-label="Tools" className="space-y-6">
              <ToolStrip label={data.toolsLabel} tools={data.tools} />
            </section>

            {/* Contact */}
            <ContactSection contact={data.contact} resumeUrl={data.resumeUrl} />
          </div>
        </Container>
      </main>
    </div>
  );
}
