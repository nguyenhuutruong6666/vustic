
import './ProjectDetail.scss';
import Container from '../../common/Container/Container';

function ProjectDetail({ project }) {
  if (!project) return null;

  return (
    <section className="project-detail">
      <Container>
        <div className="project-detail-hero">
          <div className="project-detail-image-wrapper">
            <img src={project.image} alt={project.title} className="project-hero-img" loading="lazy" />
            <div className="project-hero-overlay">
              <span className="project-badge">{project.year}</span>
            </div>
          </div>
        </div>

        <div className="project-detail-wrapper">
          <div className="project-detail-left">
            <span className="project-subtitle">Dự án nổi bật</span>
            <h1 className="project-title">{project.title.toUpperCase()}</h1>
            
            <div className="project-info-box">
              <div className="info-item">
                <span className="info-label">Năm thực hiện:</span>
                <span className="info-value">{project.year}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Lĩnh vực:</span>
                <span className="info-value">Thương mại & Đầu tư</span>
              </div>
            </div>
            
            <div className="project-socials">
              <span className="social-label">Chia sẻ:</span>
              <div className="social-links">
                <a href="#" aria-label="Facebook">
                  <svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="#" aria-label="Twitter">
                  <svg viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                </a>
                <a href="mailto:vusticjsc@gmail.com" aria-label="Email">
                  <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </a>
                <a href="#" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="project-detail-right">
            <div className="project-content-block">
              <h3>Tổng quan dự án</h3>
              <p className="project-full-desc">{project.description}</p>
              <p className="project-full-desc">
                Với mục tiêu kết nối giao thương chiến lược, dự án đóng vai trò quan trọng trong việc thúc đẩy mối quan hệ hợp tác toàn diện. 
                Chúng tôi không ngừng mở rộng mạng lưới, tạo ra những giá trị bền vững cho các đối tác tham gia.
              </p>
            </div>
            
            <div className="project-content-block highlight-block">
              <h3>Kết quả đạt được</h3>
              <ul className="project-results">
                <li>Kết nối thành công hơn 50 doanh nghiệp chiến lược.</li>
                <li>Xúc tiến đầu tư và chuyển giao công nghệ hiện đại.</li>
                <li>Mở rộng thị phần phân phối tại khu vực Bắc Mỹ.</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ProjectDetail;
