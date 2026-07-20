import Container from '../../../components/common/Container/Container';
import strategicrole from '../../../assets/images/StrategicRole.webp';
import './StrategicRole.scss';

function StrategicRole() {
  return (
    <section className="strategic-role section">
      <Container>
        <div className="strategic-role-grid">
          <div className="strategic-role-content">
            <div className="strategic-role-badge">VUSTIC JSC</div>
            <h2 className="strategic-role-title">"Bước chuyển mình chiến lược và vai trò tiên phong"</h2>
            
            <p>Trước bước ngoặt lịch sử khi quan hệ Việt - Mỹ được nâng cấp thành Đối tác chiến lược toàn diện (2023), cơ hội mở ra để Việt Nam tiếp cận thị trường Mỹ – khu vực kinh tế lớn nhất thế giới với quy mô 30.000 tỷ USD. VUSTIC ra đời với sứ mệnh trở thành cầu nối đầu tư, công nghệ giao thương và kết nối. VUSTIC không chỉ hỗ trợ doanh nghiệp Việt tiếp cận thị trường Mỹ và Bắc Mỹ, mà còn thúc đẩy hợp tác kinh tế sâu rộng, hiệu quả giữa hai quốc gia.</p>
            
            <p>VUSTIC nhận được sự hỗ trợ và đồng hành chặt chẽ từ Liên hiệp các Tổ chức Hữu nghị Việt Nam (VUFO), các hội trực thuộc và Bộ Ngoại giao. Với nền tảng vững chắc ấy, VUSTIC tự tin trở thành đối tác đáng tin cậy của doanh nghiệp và tổ chức quốc tế, góp phần thúc đẩy tiến trình hội nhập và phát triển của một Việt Nam thịnh vượng, hùng cường trên trường thế giới.</p>
          </div>
          <div className="strategic-role-image">
            <img src={strategicrole} alt="strategicrole" className="strategicrole" loading="lazy" />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default StrategicRole;
