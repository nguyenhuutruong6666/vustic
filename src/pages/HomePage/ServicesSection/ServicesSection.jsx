import { useEffect, useRef, useState } from 'react';
import Container from '../../../components/common/Container/Container';
import './ServicesSection.scss';
import { services } from '../../../services/ServicesSection';
import anhcau from '../../../assets/images/anhcau.png';
import ViewAll from '../../../components/common/ViewAll/ViewAll';
import FindMore from '../../../components/common/FindMore/FindMore';

function ServicesSection() {
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
    <section className="services-section section" id="services" ref={sectionRef}>
      <div className="services-section-bg" style={{ backgroundImage: `url(${anhcau})` }}></div>
      <Container>
        <div className={`services-section-header ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
          <h2 className="services-section-title">DỊCH VỤ CỦA VUSTIC JSC</h2>
          <p className="services-section-subtitle">
            Công nghiệp hóa, hiện đại hóa và mang sản phẩm hàng hóa, dịch vụ xuất xứ Việt Nam tiếp cận thị trường Mỹ
          </p>
        </div>
        <div className={`services-section-grid ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-card-icon">
                <img src={service.icon} alt={service.title} className="service-icon-img" loading="lazy" />
              </div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-desc">{service.description}</p>
              <FindMore href="#" className="service-card-btn" />
            </div>
          ))}
        </div>
        
        <div className="services-section-footer">
          <ViewAll href="#" className="services-section-viewall" />
        </div>
      </Container>
    </section>
  );
}

export default ServicesSection;
