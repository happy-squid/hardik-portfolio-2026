import { AppShell } from '../components/AppShell';
import { Container, Reading } from '../components/Layout';
import { ProjectMetadata } from '../components/ProjectMetadata';
import { ValueAddedBlock } from '../components/ValueAddedBlock';
import { CaseStudySection } from '../components/CaseStudySection';
import { AirportContextSection } from '../components/AirportContextSection';
import { GenUIServiceLayer } from '../components/GenUIServiceLayer';
import { GenUIFlowSection } from '../components/GenUIFlowSection';
import { KioskAccessSection } from '../components/KioskAccessSection';
import { VehicleScreensGrid } from '../components/VehicleScreensGrid';
import { DesignDecisionCards } from '../components/DesignDecisionCards';
import { TestingNextSection } from '../components/TestingNextSection';
import { airportProject } from '../data/airport';

/**
 * AirportProject is the V1 case-study page for the Airport AMR project.
 * Content is sourced from `airportProject` in src/data/airport.ts. Sections are
 * rendered only when their data is present, so the page degrades gracefully.
 * The design system board is intentionally NOT rendered in V1.
 */
export function AirportProject() {
  const project = airportProject;

  return (
    <AppShell>
      <Container>
        <div className="space-y-12 py-10 sm:space-y-16 sm:py-14 lg:py-16">

          {/* 1. Title, subtitle, hero image */}
          <section aria-label="Project overview">
            <Reading className="mb-8">
              <h1 className="text-3xl font-semibold tracking-tight text-[#111] sm:text-4xl lg:text-[2.75rem]">
                {project.title}
              </h1>
              {project.subtitle && (
                <p className="mt-3 text-base text-neutral-500 sm:text-lg">
                  {project.subtitle}
                </p>
              )}
            </Reading>

            <div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-neutral-100 md:aspect-[16/7]">
              <img
                src={project.hero.src}
                alt={project.hero.alt}
                className="h-full w-full object-cover"
              />
            </div>
          </section>

          {/* Metadata (maps airport metadata into the shared component shape) */}
          <ProjectMetadata
            metadata={{
              readTime: project.metadata.readTime,
              category: project.metadata.categories,
              tools: project.metadata.tools,
              projectType: project.metadata.projectType,
              role: project.metadata.role,
              scope: project.metadata.scope,
            }}
          />

          {/* Value added */}
          <ValueAddedBlock
            label={project.valueAdded.label}
            statement={project.valueAdded.statement}
          />

          {/* 2. My slice of the system */}
          {project.context && <AirportContextSection data={project.context} />}

          {/* 3. The passenger interaction gap (text-only) */}
          {project.interactionGap && (
            <CaseStudySection
              id="interaction-gap"
              heading={project.interactionGap.heading}
              lead={project.interactionGap.body}
            >
              {null}
            </CaseStudySection>
          )}

          {/* 4. The service layer */}
          {project.serviceLayer && (
            <GenUIServiceLayer data={project.serviceLayer} />
          )}

          {/* 5. From one passenger request to multiple actions */}
          {project.genuiFlow && <GenUIFlowSection data={project.genuiFlow} />}

          {/* 6. Kiosk as the physical entry point */}
          {project.kioskAccess && (
            <KioskAccessSection data={project.kioskAccess} />
          )}

          {/* 7. Vehicle screens for moving contexts */}
          {project.vehicleScreens && (
            <VehicleScreensGrid data={project.vehicleScreens} />
          )}

          {/* 8. Key design decisions */}
          {project.designDecisions && (
            <DesignDecisionCards data={project.designDecisions} />
          )}

          {/* 9. What I would test next */}
          {project.testingNext && (
            <TestingNextSection data={project.testingNext} />
          )}

          {/* 10. Contact footer */}
          {project.footerCta && (
            <section
              aria-label="Contact"
              className="border-t border-neutral-200 pt-8"
            >
              <Reading>
                <h2 className="text-xl font-semibold text-[#111] sm:text-2xl">
                  {project.footerCta.heading}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-neutral-600">
                  {project.footerCta.body}
                </p>
                {project.footerCta.email && (
                  <a
                    href={`mailto:${project.footerCta.email}`}
                    className="mt-4 inline-block text-base font-medium text-[#111] underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111]"
                  >
                    {project.footerCta.email}
                  </a>
                )}
              </Reading>
            </section>
          )}

        </div>
      </Container>
    </AppShell>
  );
}
