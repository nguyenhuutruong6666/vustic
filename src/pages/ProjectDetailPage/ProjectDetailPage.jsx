import { useParams } from 'react-router';
import ProjectDetail from '../../components/compage/ProjectDetail/ProjectDetail';
import { projects } from '../../services/ProjectsSection';

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
    </main>
  );
}

export default ProjectDetailPage;
