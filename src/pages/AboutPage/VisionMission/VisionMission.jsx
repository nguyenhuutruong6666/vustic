import { useEffect, useRef } from 'react';
import Container from '../../../components/common/Container/Container';
import './VisionMission.scss';

function AnimatedRow({ bgColorClass, number, titleBadge, titleText, desc }) {
  const ref = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slide-in-left');
          entry.target.classList.remove('opacity-0');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`vm-row ${bgColorClass}`}>
      <Container>
        <div ref={ref} className="vm-content opacity-0">
          <div className="vm-number">{number}</div>
          <div className="vm-title">
            <h3><strong className="vm-title-blur">{titleBadge}</strong> {titleText}</h3>
          </div>
          <div className="vm-desc">
            <p>{desc}</p>
          </div>
        </div>
      </Container>
    </div>
  );
}

function VisionMission() {
  return (
    <section className="vision-mission">
      <AnimatedRow 
        bgColorClass="vm-blue"
        number="01"
        titleBadge="TẦM NHÌN"
        titleText="Khát khao của chúng tôi là gì?"
        desc="VUSTIC hướng tới trở thành cầu nối giao thương uy tín hàng đầu, mở rộng cánh cửa thị trường toàn cầu cho doanh nghiệp Việt. Với vai trò là đối tác chiến lược tin cậy, chúng tôi kiến tạo hệ sinh thái kết nối - hợp tác - đầu tư, đưa thương hiệu Việt vươn tầm quốc tế."
      />
      
      <AnimatedRow 
        bgColorClass="vm-dark-blue"
        number="02"
        titleBadge="SỨ MỆNH"
        titleText="Đạt được điều đó như thế nào"
        desc="VUSTIC mang trong mình sứ mệnh kết nối thị trường Việt Nam với thế giới và ngược lại - bằng những giải pháp xúc tiến thương mại chuyên nghiệp, hiệu quả và bền vững. Chúng tôi cam kết đồng hành cùng doanh nghiệp, mở ra những cánh cửa giao thương mới, thúc đẩy giá trị Việt vươn xa toàn cầu."
      />
      
      <AnimatedRow 
        bgColorClass="vm-red"
        number="03"
        titleBadge="GIÁ TRỊ CỐT LÕI"
        titleText="Điều mà chúng tôi tin tưởng?"
        desc="Tại VUSTIC, chúng tôi lấy sáng tạo làm nền tảng tạo ra những giải pháp xúc tiến thương mại đột phá. Hiệu quả là thước đo cho mọi hành động. Liêm chính là nguyên tắc cho mọi mối quan hệ hợp tác bền vững. Ba giá trị này chính là kim chỉ nam giúp VUSTIC giữ vững uy tín và tạo nên thành công lâu dài cho khách hàng và đối tác."
      />
    </section>
  );
}

export default VisionMission;
