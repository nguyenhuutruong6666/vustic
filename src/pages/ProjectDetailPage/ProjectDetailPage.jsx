import { useParams } from 'react-router';
import ProjectDetail from '../../components/compage/ProjectDetail/ProjectDetail';
import { projects } from '../../services/ProjectsSection';
import ContactBanner from '../../components/compage/ContactBanner/ContactBanner';

function ProjectDetailPage() {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <div style={{ paddingTop: '150px', textAlign: 'center', minHeight: '60vh' }}>
        <h2>Không tìm thấy dự án</h2>
      </div>
    );
  }

  return (
    <main className="project-detail-page">
      <ProjectDetail project={project} />
      <ContactBanner />
    </main>
  );
}

export default ProjectDetailPage;
