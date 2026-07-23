import { useEffect, useRef, useState } from 'react';
import Container from '../../../components/common/Container/Container';
import contactbanner  from '../../../assets/images/ContactBanner.webp';
import './ContactBanner.scss';
import FindMore from '../../../components/common/FindMore/FindMore';

function ContactBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <section className="contact-banner" style={{ '--bg-image': `url(${contactbanner})` }} ref={sectionRef}>
      <div className="contact-banner-overlay"></div>
      <Container>
        <div className={`contact-banner-content ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
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
