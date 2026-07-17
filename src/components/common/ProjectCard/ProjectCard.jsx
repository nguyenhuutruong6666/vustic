import { Link } from 'react-router';
import './ProjectCard.scss';

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-card-image">
        {project.image ? (
          <img src={project.image} alt={project.title} loading="lazy" />
        ) : (
          <div className="project-card-placeholder">📁</div>
        )}
        <div className="project-card-overlay">
          <Link to={`/du-an/${project.id}`} className="project-card-btn">
            Xem chi tiết
          </Link>
        </div>
      </div>
      <div className="project-card-content">
        <span className="project-card-category">{project.category}</span>
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-description">{project.description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
