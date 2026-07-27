import Container from '../../common/Container/Container';
import './MemberDetail.scss';

function MemberDetail({ member }) {
  return (
    <section className="member-detail">
      <Container>
        <div className="member-detail-wrapper">
          <div className="member-detail-left">
            <div className="member-detail-image">
              <img src={member.image} alt={member.name} loading="lazy" />
              <div className="member-decor-box"></div>
            </div>
            
            <div className="member-contact-info">
              <h4>Thông tin liên hệ</h4>
              <a href="mailto:contact@vustic.com" className="contact-link">
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                contact@vustic.com
              </a>
              <a href="#" className="contact-link">
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                LinkedIn Profile
              </a>
            </div>
          </div>
          
          <div className="member-detail-right">
            <div className="member-header">
              <span className="member-detail-role">{member.role}</span>
              <h1 className="member-detail-name">{member.name}</h1>
              <div className="title-separator"></div>
            </div>
            
            <div className="member-detail-info">
              <h4>Tiểu sử & Kinh nghiệm làm việc</h4>
              <ul className="experience-list">
                {member.experience.map((exp, index) => (
                  <li key={index}>
                    <div className="exp-icon">
                      <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <p>{exp}</p>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="member-detail-quote">
              <svg className="quote-icon" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="quote-text">
                "Chúng tôi tin tưởng rằng sự kết nối và hợp tác chân thành chính là chìa khóa mở ra mọi cánh cửa thành công trên con đường chinh phục thị trường toàn cầu."
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default MemberDetail;
