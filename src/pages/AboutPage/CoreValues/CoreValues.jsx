import { useEffect, useRef, useState } from 'react';
import Container from '../../../components/common/Container/Container';
import './CoreValues.scss';

function CoreValues() {
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
    <section className="core-values-section section" ref={sectionRef}>
      <Container>
        <div className="core-values-grid">
          <div className={`cv-card ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="cv-icon cv-icon-red">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </div>
            <div className="cv-content">
              <h3>TẦM NHÌN CỦA CHÚNG TÔI</h3>
              <p>Trung tâm Giao thương Việt Mỹ (VUSTIC) được thành lập bởi các thành viên nòng cốt giàu kinh nghiệm trong lĩnh vực đối ngoại, kinh doanh và xúc tiến thương mại. Với tầm nhìn chiến lược và tinh thần tiên phong, VUSTIC mang trong mình sứ mệnh kết nối thịnh vượng giữa Việt Nam và thế giới - không chỉ giới hạn ở thị trường Hoa Kỳ mà còn hướng đến một mạng lưới giao thương toàn cầu.</p>
            </div>
          </div>
          
          <div className={`cv-card ${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`}>
            <div className="cv-icon cv-icon-red">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                <line x1="4" y1="22" x2="4" y2="15"></line>
              </svg>
            </div>
            <div className="cv-content">
              <h3>VAI TRÒ VÀ HOẠT ĐỘNG</h3>
              <p>VUSTIC hoạt động như một cầu nối tin cậy, hỗ trợ doanh nghiệp Việt tiếp cận thị trường quốc tế thông qua các hoạt động kết nối đối tác, xúc tiến đầu tư, tổ chức hội chợ, triển lãm, tư vấn thương mại và hỗ trợ pháp lý. Chúng tôi không chỉ mở ra cơ hội hợp tác mới mà còn đồng hành cùng doanh nghiệp trong suốt hành trình phát triển bền vững và hội nhập sâu rộng.</p>
            </div>
          </div>
          
          <div className={`cv-card ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="cv-icon cv-icon-red">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <div className="cv-content">
              <h3>GIÁ TRỊ KẾ THỪA</h3>
              <p>Thừa hưởng mạng lưới quan hệ sâu rộng và nền tảng kinh nghiệm vững chắc, VUSTIC tự hào phát huy những giá trị truyền thống kết hợp với tư duy đổi mới. Chúng tôi cam kết mang lại những giải pháp toàn diện, giúp đối tác tối ưu hóa hiệu quả kinh doanh và thiết lập những mối quan hệ hợp tác chiến lược dài lâu.</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default CoreValues;
