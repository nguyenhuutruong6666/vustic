import Container from '../../../components/common/Container/Container';
import './ContactForm.scss';
import mapPlaceholder from '../../../assets/images/imgcontact.webp'; 

function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="contact-form-section section">
      <Container>
        <div className="contact-grid">
          <div className="contact-map">
            <img src={mapPlaceholder} alt="Bản đồ liên hệ" className="map-image" loading="lazy" />
          </div>
          <div className="contact-content">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fullname">Họ và tên</label>
                  <input type="text" id="fullname" name="fullname" placeholder="Vui lòng nhập họ và tên" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="Vui lòng nhập Email" required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="phone">Số điện thoại</label>
                <input type="tel" id="phone" name="phone" placeholder="Vui lòng nhập số điện thoại" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Lời nhắn</label>
                <textarea id="message" name="message" rows="4" placeholder="Vui lòng nhập lời nhắn" required></textarea>
              </div>
              <div className="form-submit">
                <button type="submit" className="submit-btn">Gửi ngay</button>
              </div>
            </form>

            <div className="contact-info">
              <h3 className="contact-info-title">Thông Tin Liên Hệ:</h3>
              <div className="contact-info-item">
                <span className="info-label">Trụ sở chính:</span>
                <span className="info-text"> 1102 tầng 11, tòa nhà Giảng Võ lakeview, D10 Giảng Võ, Phường Giảng Võ, Quận Ba Đình, Hà Nội, Việt Nam</span>
              </div>
              <div className="contact-info-item">
                <span className="info-label">Văn phòng giao dịch:</span>
                <span className="info-text"> Số 105A Phố Quán Thánh, Phường Quán Thánh, Quận Ba Đình, Thành phố Hà Nội, Việt Nam.</span>
              </div>
              <div className="contact-info-item">
                <span className="info-label">Điện thoại:</span>
                <span className="info-text"> +84 865 683 662, +84 987 900 789</span>
              </div>
              <div className="contact-info-item">
                <span className="info-label">Email:</span>
                <span className="info-text"> info@vustic.com.vn</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ContactForm;
