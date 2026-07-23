import { preload } from 'react-dom';
import Container from '../../common/Container/Container';
import './Hero.scss';
import defaultHeroBg from '../../../assets/images/anhhop.webp';
import anh1 from '../../../assets/images/anh1.webp';
import anh2 from '../../../assets/images/anh2.webp';

const DEFAULT_SUBTITLE = 'VUSTIC mang sứ mệnh kết nối thương mại, đầu tư và văn hoá giữa hai quốc gia, góp phần đưa sản phẩm và dịch vụ Việt vươn xa đến thị trường Mỹ và Bắc Mỹ.';

function Hero({
  title,
  subtitle = DEFAULT_SUBTITLE,
  badge = 'VUSTIC',
  backgroundImage = defaultHeroBg,
  fullscreen = false,
}) {
  if (backgroundImage) {
    preload(backgroundImage, { as: 'image' });
  }

  return (
    <section
      className={`hero${fullscreen ? ' hero--fullscreen' : ''}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="hero-overlay"></div>

      <Container className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">{badge}</div>
          <h1 className="hero-title">{title}</h1>
          {subtitle && (
            <p className="hero-subtitle">{subtitle}</p>
          )}
        </div>
      </Container>

      <div className="hero-partners">
        <Container>
          <div className="hero-partners-inner">
            <span className="hero-partners-text">ĐỐI TÁC CỦA CHÚNG TÔI:</span>
            <div className="hero-partners-logos">
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

export default Hero;
