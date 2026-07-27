import Container from '../../common/Container/Container';
import './MemberDetail.scss';

function MemberDetail({ member }) {
  return (
    <section className="member-detail">
      <Container>
        <div className="member-detail-wrapper">
          <div className="member-detail-left">
            <div className="member-detail-image">
              <img src={member.image} alt={member.name} />
            </div>
          </div>
          <div className="member-detail-right">
            <span className="member-detail-role">{member.role}</span>
            <h1 className="member-detail-name">{member.name}</h1>
            
            <div className="member-detail-info">
              <h4>Kinh nghiệm làm việc:</h4>
              <ul>
                {member.experience.map((exp, index) => (
                  <li key={index}>{exp}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default MemberDetail;
