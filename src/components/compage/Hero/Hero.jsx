import { preload } from 'react-dom';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
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
  const titleRef = useRef(null);
  const badgeRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.2 });

    if (badgeRef.current) {
      tl.from(badgeRef.current, {
        rotation: -360,
        opacity: 0,
        scale: 0.5,
        duration: 0.8,
        ease: 'back.out(1.5)',
      });
    }

    if (titleRef.current) {
      const chars = titleRef.current.querySelectorAll('.hero-char');
      
      //Hiệu ứng xuất hiện
      tl.from(chars, {
        y: 50,
        opacity: 0,
        stagger: 0.03,
        duration: 0.5,
        ease: 'back.out(1.7)',
      }, "-=0.4"); 
      
      //Hiệu ứng Hover Elastic (Jelly)
      chars.forEach(char => {
        char.addEventListener('mouseenter', () => {
          //Nếu ký tự đang không trong quá trình animate thì mới chạy
          if (!gsap.isTweening(char)) {
            gsap.fromTo(char, 
              { scaleY: 0.6, scaleX: 1.25, y: -15 }, 
              { scaleY: 1, scaleX: 1, y: 0, duration: 1, ease: "elastic.out(1, 0.3)", transformOrigin: "bottom" }
            );
          }
        });
      });
    }
  });

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
          <div ref={badgeRef} className="hero-badge" style={{ display: 'inline-block', animation: 'none' }}>{badge}</div>
          <h1 ref={titleRef} className="hero-title" style={{ animation: 'none', opacity: 1 }}>
            {title && title.split('').map((char, index) => (
              <span key={index} className="hero-char" style={{ display: 'inline-block', whiteSpace: 'pre' }}>
                {char}
              </span>
            ))}
          </h1>
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
