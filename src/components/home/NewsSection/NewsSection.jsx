import Container from '../../common/Container/Container';
import './NewsSection.scss';

const newsItems = [
  {
    id: 1,
    date: '18/03/2025',
    title: 'Hoa Kỳ khởi động SelectUSA lần thứ 10: Tạo cầu nối cho doanh...',
    description: 'Hội nghị Thượng đỉnh Đầu tư SelectUSA lần thứ 10 đã chính thức khai mạc tại Washington D.C., Hoa...'
  },
  {
    id: 2,
    date: '18/03/2025',
    title: 'Công ty Cổ phần Giao thương Việt Mỹ (VUSTIC) đã chính thứ...',
    description: 'Ngày 12/04/2024, Công ty Cổ phần Giao thương Việt Mỹ (VUSTIC) đã chính thức ra mắt tại Hà Nộ...'
  },
  {
    id: 3,
    date: '18/03/2025',
    title: 'Lễ kỷ niệm 70 năm thành lập Hội Việt - Mỹ...',
    description: 'Ngày 17/10/2024, tại trụ sở Liên hiệp các tổ chức hữu nghị Việt Nam, lễ kỷ niệm 79 năm thành lập...'
  }
];

function NewsSection() {
  return (
    <section className="news-section section">
      <Container>
        <div className="news-section-header">
          <h2 className="news-section-title">TIN TỨC & SỰ KIỆN</h2>
          <p className="news-section-subtitle">
            Cập nhật những tin tức, sự kiện từ VUSTIC
          </p>
        </div>

        <div className="news-section-grid">
          {newsItems.map((item) => (
            <div key={item.id} className="news-card">
              <div className="news-card-image-placeholder">
                Ảnh tin tức
              </div>
              <div className="news-card-content">
                <span className="news-card-date">{item.date}</span>
                <h3 className="news-card-title">{item.title}</h3>
                <p className="news-card-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="news-section-footer">
          <a href="/tin-tuc" className="news-section-btn">
            Xem tất cả
          </a>
        </div>
      </Container>
    </section>
  );
}

export default NewsSection;
