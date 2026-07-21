import ProjectHero from './ProjectHero/ProjectHero';
import ProjectsSection from './ProjectsSection/ProjectsSection';
import ContactBanner from './ContactBanner/ContactBanner';

function ProjectsPage() {
  return (
    <div className="project-page">
      <ProjectHero />
      <ProjectsSection />
      <ContactBanner />
    </div>
  );
}

export default ProjectsPage;
