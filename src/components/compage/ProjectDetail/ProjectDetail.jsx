import './ProjectDetail.scss';
import Container from '../../common/Container/Container';

function ProjectDetail({ project }) {
  if (!project) return null;

  return (
    <section className="project-detail section">
      <Container>
        <div className="project-detail-wrapper">
          <div className="project-detail-left">
            <span className="project-subtitle">Dự án nổi bật</span>
            <h1 className="project-title">{project.title.toUpperCase()}</h1>
            <p className="project-desc">{project.description}</p>
            
            <div className="project-socials">
              <a href="#" aria-label="Facebook">
                <svg viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" aria-label="Twitter">
                <svg viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="mailto:vusticjsc@gmaill.com" aria-label="Email">
                <svg viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
              <a href="#" aria-label="Pinterest">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2A10 10 0 1 0 22 12 10 10 0 0 0 12 2zm-1.8 14.7c-.5-2.2-.8-3.4-1.2-5.1-.3-1.4 0-2.8.5-3.8.4-.9 1.1-1.6 2-2 .9-.4 2-.5 3-.4 1.2.2 2.3.8 3 1.8.8 1.1 1.2 2.4 1 3.8-.2 1.6-.9 3-2 3.9-.9.8-2.2 1.2-3.4 1-.9-.2-1.7-.8-2-1.6 0 0-.4 1.5-.5 2-.2 1-.6 2.3-.9 3-.1.4-.4.8-.8 1-.3.2-.8.2-1.2.1-1-.4-1.5-1.5-1.3-2.6.2-1 1.1-4.7 1.2-5.1z"></path>
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="project-detail-right">
            <p className="project-full-desc">
              {project.description}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ProjectDetail;
