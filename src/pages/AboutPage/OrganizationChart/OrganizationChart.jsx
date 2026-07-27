import Container from '../../../components/common/Container/Container';
import './OrganizationChart.scss';
import FindMore from '../../../components/common/FindMore/FindMore';
import { members } from '../../../services/OrganizationChart';

function OrganizationChart() {
  return (
    <section className="organization-chart section">
      <Container>
        <div className="org-grid">
          <div className="org-intro-card">
            <h2 className="org-intro-title">SƠ ĐỒ TỔ CHỨC</h2>
            <p className="org-intro-text">
              VUSTIC được dẫn dắt bởi đội ngũ Ban Lãnh đạo gồm Hội đồng Quản trị và Ban Điều hành có tầm nhìn chiến lược và tâm huyết. Với kinh nghiệm sâu rộng trong môi trường đầu tư - kinh doanh trong nước và quốc tế, các thành viên lãnh đạo của VUSTIC từng giữ vai trò chủ chốt trong việc điều hành thành công nhiều tổng công ty và tập đoàn kinh tế hàng đầu tại Việt Nam.
            </p>
          </div>
          
          {members.map(member => (
            <div className="org-member-card" key={member.id}>
              <div className="org-member-image">
                <img src={member.image} alt={member.name} loading="lazy" />
              </div>
              <div className="org-member-content">
                <h3 className="org-member-name">{member.name}</h3>
                <span className="org-member-role">{member.role}</span>
                <div className="org-member-exp">
                  <p>Kinh nghiệm làm việc:</p>
                  <ul>
                    {member.experience.map((exp, index) => (
                      <li key={index}>{exp}</li>
                    ))}
                  </ul>
                </div>
                <FindMore href={`/thanh-vien/${member.id}`} className="org-member-btn" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default OrganizationChart;
