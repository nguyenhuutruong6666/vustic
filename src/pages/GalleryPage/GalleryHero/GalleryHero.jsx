import { preload } from 'react-dom';
import Container from '../../../components/common/Container/Container';
import './GalleryHero.scss';
import heroBg from '../../../assets/images/anhhop.webp';
import anh1 from '../../../assets/images/anh1.webp';
import anh2 from '../../../assets/images/anh2.webp';

function GalleryHero() {
  preload(heroBg, { as: 'image' });
  return (
    <section className="gallery-hero" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="gallery-hero-overlay"></div>
      
      <Container className="gallery-hero-container">
        <div className="gallery-hero-content">
          <div className="gallery-hero-badge">VUSTIC</div>
          <h1 className="gallery-hero-title">HÌNH ẢNH</h1>
          <p className="gallery-hero-subtitle">
            VUSTIC mang sứ mệnh kết nối thương mại, đầu tư và văn hoá giữa hai quốc gia, góp phần đưa sản phẩm và dịch vụ Việt vươn xa đến thị trường Mỹ và Bắc Mỹ.
          </p>
        </div>
      </Container>

      <div className="gallery-hero-partners">
        <Container>
          <div className="gallery-hero-partners-inner">
            <span className="gallery-hero-partners-text">ĐỐI TÁC CỦA CHÚNG TÔI:</span>
            <div className="gallery-hero-gallery-logos">
              <div className="marquee-content">
                <img src={anh1} alt="An Thái Café" className="gallery-logo" loading="lazy" />
                <img src={anh2} alt="Khanest" className="gallery-logo" loading="lazy" />
                <img src={anh1} alt="An Thái Café" className="gallery-logo" loading="lazy" />
                <img src={anh2} alt="Khanest" className="gallery-logo" loading="lazy" />
                <img src={anh1} alt="An Thái Café" className="gallery-logo" loading="lazy" />
                <img src={anh2} alt="Khanest" className="gallery-logo" loading="lazy" />
              </div>
              <div className="marquee-content">
                <img src={anh1} alt="An Thái Café" className="gallery-logo" loading="lazy" />
                <img src={anh2} alt="Khanest" className="gallery-logo" loading="lazy" />
                <img src={anh1} alt="An Thái Café" className="gallery-logo" loading="lazy" />
                <img src={anh2} alt="Khanest" className="gallery-logo" loading="lazy" />
                <img src={anh1} alt="An Thái Café" className="gallery-logo" loading="lazy" />
                <img src={anh2} alt="Khanest" className="gallery-logo" loading="lazy" />
              </div>
              <div className="marquee-content">
                <img src={anh1} alt="An Thái Café" className="gallery-logo" loading="lazy" />
                <img src={anh2} alt="Khanest" className="gallery-logo" loading="lazy" />
                <img src={anh1} alt="An Thái Café" className="gallery-logo" loading="lazy" />
                <img src={anh2} alt="Khanest" className="gallery-logo" loading="lazy" />
                <img src={anh1} alt="An Thái Café" className="gallery-logo" loading="lazy" />
                <img src={anh2} alt="Khanest" className="gallery-logo" loading="lazy" />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

export default GalleryHero;
