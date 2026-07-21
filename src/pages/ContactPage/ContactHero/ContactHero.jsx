import { preload } from 'react-dom';
import Container from '../../../components/common/Container/Container';
import './ContactHero.scss';
import heroBg from '../../../assets/images/anhhop.webp';
import anh1 from '../../../assets/images/anh1.webp';
import anh2 from '../../../assets/images/anh2.webp';

function ContactHero() {
  preload(heroBg, { as: 'image' });
  return (
    <section className="contact-hero" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="contact-hero-overlay"></div>
      
      <Container className="partners-hero-container">
        <div className="partners-hero-content">
          <div className="partners-hero-badge">VUSTIC</div>
          <h1 className="partners-hero-title">LIÊN HỆ</h1>
          <p className="partners-hero-subtitle">
            VUSTIC mang sứ mệnh kết nối thương mại, đầu tư và văn hoá giữa hai quốc gia, góp phần đưa sản phẩm và dịch vụ Việt vươn xa đến thị trường Mỹ và Bắc Mỹ.
          </p>
        </div>
      </Container>

      <div className="partners-hero-partners">
        <Container>
          <div className="partners-hero-partners-inner">
            <span className="partners-hero-partners-text">ĐỐI TÁC CỦA CHÚNG TÔI:</span>
            <div className="partners-hero-partners-logos">
              <div className="marquee-content">
                <img src={anh1} alt="An Thái Café" className="partner-logo" loading="lazy" />
                <img src={anh2} alt="Khanest" className="partner-logo" loading="lazy" />
                <img src={anh1} alt="An Thái Café" className="partner-logo" loading="lazy" />
                <img src={anh2} alt="Khanest" className="partner-logo" loading="lazy" />
                <img src={anh1} alt="An Thái Café" className="partner-logo" loading="lazy" />
                <img src={anh2} alt="Khanest" className="partner-logo" loading="lazy" />
              </div>
              <div className="marquee-content">
                <img src={anh1} alt="An Thái Café" className="partner-logo" loading="lazy" />
                <img src={anh2} alt="Khanest" className="partner-logo" loading="lazy" />
                <img src={anh1} alt="An Thái Café" className="partner-logo" loading="lazy" />
                <img src={anh2} alt="Khanest" className="partner-logo" loading="lazy" />
                <img src={anh1} alt="An Thái Café" className="partner-logo" loading="lazy" />
                <img src={anh2} alt="Khanest" className="partner-logo" loading="lazy" />
              </div>
              <div className="marquee-content">
                <img src={anh1} alt="An Thái Café" className="partner-logo" loading="lazy" />
                <img src={anh2} alt="Khanest" className="partner-logo" loading="lazy" />
                <img src={anh1} alt="An Thái Café" className="partner-logo" loading="lazy" />
                <img src={anh2} alt="Khanest" className="partner-logo" loading="lazy" />
                <img src={anh1} alt="An Thái Café" className="partner-logo" loading="lazy" />
                <img src={anh2} alt="Khanest" className="partner-logo" loading="lazy" />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

export default ContactHero;
