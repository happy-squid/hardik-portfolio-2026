import { AppShell } from '../components/AppShell';
import { ProjectHero } from '../components/ProjectHero';
import { ProjectMetadata } from '../components/ProjectMetadata';
import { ValueAddedBlock } from '../components/ValueAddedBlock';
import { ProjectViewToggle } from '../components/ProjectViewToggle';
import { ProjectIntro } from '../components/ProjectIntro';
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
      {/* Page container: max 1120px, responsive horizontal padding */}
      <div className="mx-auto w-full max-w-[1120px] px-4 sm:px-6 lg:px-12">
        <div className="py-10 sm:py-14 lg:py-16 space-y-8">

          {/* 1. Project heading + hero media */}
          <ProjectHero
            title={project.title}
            promise={project.promise}
            heroAlt={project.heroAlt}
          />

          {/* 2. Metadata grid */}
          <ProjectMetadata metadata={project.metadata} />

          {/* 3. Value added strip */}
          <ValueAddedBlock
            label={project.valueAdded.label}
            statement={project.valueAdded.statement}
          />

          {/* 4. View toggle */}
          <ProjectViewToggle />

          {/* 5. Intro section + system map */}
          <ProjectIntro
            heading={project.intro.heading}
            body={project.intro.body}
            systemMap={project.systemMap}
          />

        </div>
      </div>
    </AppShell>
  );
}
