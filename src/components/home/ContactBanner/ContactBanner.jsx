import Container from '../../common/Container/Container';
import './ContactBanner.scss';

function ContactBanner() {
  return (
    <section className="contact-banner" style={{ backgroundImage: 'url("/images/banner-bg.jpg")' }}>
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
          <a href="/gioi-thieu" className="contact-banner-btn">
            Tìm hiểu thêm &rarr;
          </a>
        </div>
      </Container>
    </section>
  );
}

export default ContactBanner;
