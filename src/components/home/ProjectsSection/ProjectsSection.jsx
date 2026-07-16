import Container from '../../common/Container/Container';
import './ProjectsSection.scss';

const projects = [
  {
    id: 1,
    year: '2025',
    title: 'Tập đoàn Cafe An Thái',
    description: 'Tập đoàn An Thái, một trong những thương hiệu hàng đầu trong ngành sản xuất cafe tại Việt Nam...'
  },
  {
    id: 2,
    year: '2025',
    title: 'Công ty Yến sào Khánh Hòa Khanest',
    description: 'Đưa các sản phẩm yến tiêu dùng nhanh và chuỗi Cafe yến Khanest đến khắp nơi trên toàn Thế Giới.'
  },
  {
    id: 3,
    year: '2025',
    title: 'Chuyến Giao Thương Việt Mỹ Tháng 5/2025',
    description: 'Tập đoàn An Thái, một trong những thương hiệu hàng đầu trong ngành sản xuất cafe tại Việt Nam...'
  },
  {
    id: 4,
    year: '2025',
    title: 'Tập đoàn Cafe An Thái',
    description: 'Tập đoàn An Thái, một trong những thương hiệu hàng đầu trong ngành sản xuất cafe tại Việt Nam...'
  },
  {
    id: 5,
    year: '2025',
    title: 'Công ty Yến sào Khánh Hòa Khanest',
    description: 'Đưa các sản phẩm yến tiêu dùng nhanh và chuỗi Cafe yến Khanest đến khắp nơi trên toàn Thế Giới.'
  },
  {
    id: 6,
    year: '2025',
    title: 'Chuyến Giao Thương Việt Mỹ Tháng 5/2025',
    description: 'Tập đoàn An Thái, một trong những thương hiệu hàng đầu trong ngành sản xuất cafe tại Việt Nam...'
  }
];

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
              <div className="project-card-image-placeholder">
                Ảnh dự án
              </div>
              <div className="project-card-content">
                <span className="project-card-year">{project.year}</span>
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-desc">{project.description}</p>
                <a href={`/du-an/${project.id}`} className="project-card-btn">
                  Tìm hiểu thêm &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default ProjectsSection;
