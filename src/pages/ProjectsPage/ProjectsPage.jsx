import Hero from '../../components/compage/Hero/Hero';
import ProjectsSection from './ProjectsSection/ProjectsSection';
import ContactBanner from '../../components/compage/ContactBanner/ContactBanner';

function ProjectsPage() {
  return (
    <div className="project-page">
      <Hero title="DỰ ÁN" />
      <ProjectsSection />
      <ContactBanner />
    </div>
  );
}

export default ProjectsPage;
