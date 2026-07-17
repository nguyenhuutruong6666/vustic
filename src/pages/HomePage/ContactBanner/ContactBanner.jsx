import Container from '../../../components/common/Container/Container';
import contactbanner from '../../../assets/images/ContactBanner.png';
import './ContactBanner.scss';
import FindMore from '../../../components/common/FindMore/FindMore';

function ContactBanner() {
  return (
    <section className="contact-banner" style={{ '--bg-image': `url(${contactbanner})` }}>
      <div className="contact-banner-overlay"></div>
      <Container>
        <div className="contact-banner-content">
          <div className="contact-banner-badge">VUSTIC JSC</div>
          <h2 className="contact-banner-title">
            Hãy cùng VUSTIC kết nối cơ hội và vươn xa vào thị trường toàn cầu ngay hôm nay!
          </h2>
          <p className="contact-banner-text">
            Đồng hành cùng doanh nghiệp Việt trên hành trình vươn ra thế giới, kết nối trực tiếp với đối tác Hoa Kỳ.
          </p>
          <FindMore href={`/gioi-thieu`} className="project-card-btn" />
        </div>
      </Container>
    </section>
  );
}

export default ContactBanner;
