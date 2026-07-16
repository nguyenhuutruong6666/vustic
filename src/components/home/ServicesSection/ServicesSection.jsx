import Container from '../../common/Container/Container';
import './ServicesSection.scss';

const services = [
  {
    id: 1,
    title: 'Kết nối giao thương Việt - Mỹ',
    description: 'Hỗ trợ doanh nghiệp hai nước gặp gỡ, xúc tiến hợp tác kinh tế, thương mại và đầu tư một cách hiệu quả và bền vững.',
    icon: '🌍'
  },
  {
    id: 2,
    title: 'Tổ chức sự kiện & triển lãm',
    description: 'Thiết kế và triển khai các chương trình xúc tiến thương mại, hội thảo, triển lãm nhằm quảng bá sản phẩm, mở rộng thị trường.',
    icon: '📅'
  },
  {
    id: 3,
    title: 'Tư vấn & Hỗ trợ chiến lược',
    description: 'Cung cấp dịch vụ tư vấn pháp lý, đầu tư, xuất nhập khẩu và hỗ trợ doanh nghiệp Việt Nam tiếp cận thị trường Mỹ.',
    icon: '📑'
  }
];

function ServicesSection() {
  return (
    <section className="services-section section" id="services">
      <div className="services-section-bg"></div>
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
              <div className="service-card-icon">{service.icon}</div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-desc">{service.description}</p>
              <a href={`/dich-vu/${service.id}`} className="service-card-btn">
                Tìm hiểu thêm &rarr;
              </a>
            </div>
          ))}
        </div>
        
        <div className="services-section-footer">
          <a href="/dich-vu" className="services-section-viewall">
            View All
          </a>
        </div>
      </Container>
    </section>
  );
}

export default ServicesSection;
