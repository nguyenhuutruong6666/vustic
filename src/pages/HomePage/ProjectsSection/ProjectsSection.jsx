import Container from '../../../components/common/Container/Container';
import './ProjectsSection.scss';
import { projects } from '../../../services/ProjectsSection';
import FindMore from '../../../components/common/FindMore/FindMore';

function ProjectsSection() {
  return (
    <section className="projects-section section">
      <Container>
        <div className="projects-section-header">
          <h2 className="projects-section-title">DỰ ÁN NỔI BẬT</h2>
          <p className="projects-section-subtitle">
            Công nghiệp hóa, hiện đại hóa và mang sản phẩm hàng hóa, dịch vụ xuất xứ Việt Nam tiếp cận thị trường Mỹ
          </p>
        </div>

        <div className="projects-section-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-card-image">
                <img src={project.image} alt={project.title} className="project-card-img" />
              </div>
              <div className="project-card-content">
                <span className="project-card-year">{project.year}</span>
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-desc">{project.description}</p>
                <FindMore href={`/du-an/${project.id}`} className="project-card-btn" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default ProjectsSection;
