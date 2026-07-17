import Container from '../../../components/common/Container/Container';
import './AboutSection.scss';
import anhhop2 from '../../../assets/images/anhhop2.jpg';
import FindMore from '../../../components/common/FindMore/FindMore';

function AboutSection() {
  return (
    <section className="about-section section" id="about">
      <Container>
        <div className="about-section-grid">
          <div className="about-section-content">
            <h2 className="about-section-title">VỀ VUSTIC JSC</h2>
            <p className="about-section-text">
              Trung tâm Giao thương Việt Mỹ (VUSTIC) được thành lập bởi các thành viên nòng cốt giàu kinh nghiệm trong lĩnh vực đối ngoại, kinh doanh và xúc tiến thương mại. Với tầm nhìn chiến lược và tinh thần tiên phong, VUSTIC mang trong mình sứ mệnh kết nối thịnh vượng giữa Việt Nam và thế giới – không chỉ giới hạn ở thị trường Hoa Kỳ mà còn hướng đến một mạng lưới giao thương toàn cầu.
            </p>
            <FindMore href="/gioi-thieu" className="about-section-btn" />
          </div>
          <div className="about-section-image">
            <div className="about-section-image-placeholder">
              <img src={anhhop2} alt="anhhop2" className="anhhop2" loading="lazy" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AboutSection;
