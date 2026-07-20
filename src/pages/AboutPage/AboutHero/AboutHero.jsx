import { preload } from 'react-dom';
import Container from '../../../components/common/Container/Container';
import './AboutHero.scss';
import heroBg from '../../../assets/images/anhhop.webp';
import anh1 from '../../../assets/images/anh1.webp';
import anh2 from '../../../assets/images/anh2.webp';

function AboutHero() {
  preload(heroBg, { as: 'image' });
  return (
    <section className="about-hero" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="about-hero-overlay"></div>
      
      <Container className="about-hero-container">
        <div className="about-hero-content">
          <div className="about-hero-badge">VUSTIC</div>
          <h1 className="about-hero-title">VỀ CHÚNG TÔI</h1>
          <p className="about-hero-subtitle">
            VUSTIC tự hào là cầu nối tin cậy, mở ra những cơ hội vàng cho doanh nghiệp Việt Nam vươn tầm và khẳng định vị thế tại thị trường Hoa Kỳ và Bắc Mỹ.
          </p>
        </div>
      </Container>

      <div className="about-hero-partners">
        <Container>
          <div className="about-hero-partners-inner">
            <span className="about-hero-partners-text">ĐỐI TÁC CỦA CHÚNG TÔI:</span>
            <div className="about-hero-partners-logos">
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

export default AboutHero;
