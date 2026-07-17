import Container from '../../../components/common/Container/Container';
import './HeroSection.scss';
import heroBg from '../../../assets/images/anhhop.png';
import anh1 from '../../../assets/images/anh1.png';
import anh2 from '../../../assets/images/anh2.png';

function HeroSection() {
  return (
    <section className="hero-section" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="hero-section-overlay"></div>
      
      <Container className="hero-section-container">
        <div className="hero-section-content">
          <div className="hero-section-badge">VUSTIC</div>
          <h1 className="hero-section-title">CẦU NỐI THỊNH VƯỢNG VIỆT - MỸ</h1>
          <p className="hero-section-subtitle">
            Được sáng lập bởi Hội Việt Mỹ, VUSTIC mang sứ mệnh kết nối thương mại, đầu tư và văn hoá giữa hai quốc gia, góp phần đưa sản phẩm và dịch vụ Việt vươn xa đến thị trường Mỹ và Bắc Mỹ.
          </p>
        </div>
      </Container>

      <div className="hero-section-partners">
        <Container>
          <div className="hero-section-partners-inner">
            <span className="hero-section-partners-text">ĐỐI TÁC CỦA CHÚNG TÔI:</span>
            <div className="hero-section-partners-logos">
              <div className="marquee-content">
                <img src={anh1} alt="An Thái Café" className="partner-logo" />
                <img src={anh2} alt="Khanest" className="partner-logo" />
                <img src={anh1} alt="An Thái Café" className="partner-logo" />
                <img src={anh2} alt="Khanest" className="partner-logo" />
                <img src={anh1} alt="An Thái Café" className="partner-logo" />
                <img src={anh2} alt="Khanest" className="partner-logo" />
              </div>
              <div className="marquee-content">
                <img src={anh1} alt="An Thái Café" className="partner-logo" />
                <img src={anh2} alt="Khanest" className="partner-logo" />
                <img src={anh1} alt="An Thái Café" className="partner-logo" />
                <img src={anh2} alt="Khanest" className="partner-logo" />
                <img src={anh1} alt="An Thái Café" className="partner-logo" />
                <img src={anh2} alt="Khanest" className="partner-logo" />
              </div>
              <div className="marquee-content">
                <img src={anh1} alt="An Thái Café" className="partner-logo" />
                <img src={anh2} alt="Khanest" className="partner-logo" />
                <img src={anh1} alt="An Thái Café" className="partner-logo" />
                <img src={anh2} alt="Khanest" className="partner-logo" />
                <img src={anh1} alt="An Thái Café" className="partner-logo" />
                <img src={anh2} alt="Khanest" className="partner-logo" />
              </div>
              <div className="marquee-content">
                <img src={anh1} alt="An Thái Café" className="partner-logo" />
                <img src={anh2} alt="Khanest" className="partner-logo" />
                <img src={anh1} alt="An Thái Café" className="partner-logo" />
                <img src={anh2} alt="Khanest" className="partner-logo" />
                <img src={anh1} alt="An Thái Café" className="partner-logo" />
                <img src={anh2} alt="Khanest" className="partner-logo" />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

export default HeroSection;
