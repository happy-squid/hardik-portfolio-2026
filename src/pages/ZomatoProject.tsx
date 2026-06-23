import { AppShell } from '../components/AppShell';
import { Container } from '../components/Layout';
import { ProjectHero } from '../components/ProjectHero';
import { ProjectMetadata } from '../components/ProjectMetadata';
import { ValueAddedBlock } from '../components/ValueAddedBlock';
import { ProjectViewToggle } from '../components/ProjectViewToggle';
import { ProjectIntro } from '../components/ProjectIntro';
import { ProjectJourney } from '../components/ProjectJourney';
import { ProjectEvidence } from '../components/ProjectEvidence';
import { SolutionPreview } from '../components/SolutionPreview';
import { HowItWorks } from '../components/HowItWorks';
import { AlternativesGrid } from '../components/AlternativesGrid';
import { zomatoProject } from '../data/zomato';

/**
 * ZomatoProject is the case-study page for the Zomato Delivery project.
 * Content is sourced from the typed data object in src/data/zomato.ts.
 * The same page template can be reused for other projects by swapping the data.
 */
export function ZomatoProject() {
  const project = zomatoProject;

  return (
    <AppShell>
      <Container>
        {/* Major sections share a calm, consistent vertical rhythm */}
        <div className="space-y-12 py-10 sm:space-y-16 sm:py-14 lg:py-16">

          {/*
           * Approved V1 section sequence (data lives in src/data/zomato.ts):
           *   1. Hero                         — rendered
           *   2. Metadata                     — rendered
           *   3. Value added                  — rendered
           *   4. Overview: map ends at a pin  — data: overviewMoment   (uses existing intro)
           *   5. Current journey: delivery gap— data: currentJourney   (rendered)
           *   6. Evidence: survey only        — data: evidence         (rendered)
           *   7. Solution at a glance         — data: solutionPreview  (rendered)
           *   8. How it works                 — data: howItWorks       (rendered)
           *   9. Alternatives (compact cards) — data: alternatives     (rendered)
           *  10. From sketch to screen (if time)— data: evolution      (pending render)
           *  11. Contact footer               — data: footerCta        (pending render)
           * View toggle + intro/system map below are existing scaffolding;
           * evolution + footerCta are intentionally not rendered in this prompt.
           */}

          {/* 1. Project heading + hero media */}
          <ProjectHero
            title={project.title}
            promise={project.promise}
            heroAlt={project.heroAlt}
            heroVideo={project.heroVideo}
          />

          {/* 2. Metadata grid */}
          <ProjectMetadata metadata={project.metadata} />

          {/* 3. Value added strip */}
          <ValueAddedBlock
            label={project.valueAdded.label}
            statement={project.valueAdded.statement}
          />

          {/* View toggle */}
          <ProjectViewToggle />

          {/* Intro section + system map (existing scaffolding) */}
          <ProjectIntro
            heading={project.intro.heading}
            body={project.intro.body}
            systemMap={project.systemMap}
          />

          {/* 5. Current journey / delivery gap */}
          {project.currentJourney && (
            <ProjectJourney data={project.currentJourney} />
          )}

          {/* 6. Evidence (survey only, directional) */}
          {project.evidence && <ProjectEvidence data={project.evidence} />}

          {/* 7. Solution at a glance */}
          {project.solutionPreview && (
            <SolutionPreview data={project.solutionPreview} />
          )}

          {/* 8. How it works (proposed community-landmark flow) */}
          {project.howItWorks && <HowItWorks data={project.howItWorks} />}

          {/* 9. Alternatives explored (compact cards) */}
          {project.alternatives && project.alternatives.length > 0 && (
            <AlternativesGrid items={project.alternatives} />
          )}

        </div>
      </Container>
    </AppShell>
  );
}
