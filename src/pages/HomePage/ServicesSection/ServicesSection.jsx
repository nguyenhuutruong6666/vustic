import Container from '../../../components/common/Container/Container';
import './ServicesSection.scss';
import { services } from '../../../services/ServicesSection';
import anhcau from '../../../assets/images/anhcau.png';
import ViewAll from '../../../components/common/ViewAll/ViewAll';
import FindMore from '../../../components/common/FindMore/FindMore';

function ServicesSection() {
  return (
    <section className="services-section section" id="services">
      <div className="services-section-bg" style={{ backgroundImage: `url(${anhcau})` }}></div>
      <Container>
        <div className="services-section-header">
          <h2 className="services-section-title">DỊCH VỤ CỦA VUSTIC JSC</h2>
          <p className="services-section-subtitle">
            Công nghiệp hóa, hiện đại hóa và mang sản phẩm hàng hóa, dịch vụ xuất xứ Việt Nam tiếp cận thị trường Mỹ
          </p>
        </div>
        <div className="services-section-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-card-icon">
                <img src={service.icon} alt={service.title} className="service-icon-img" />
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
