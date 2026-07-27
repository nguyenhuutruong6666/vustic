import './NewsDetail.scss';
import Container from '../../common/Container/Container';

function NewsDetail({ newsItem }) {
  if (!newsItem) return null;

  return (
    <section className="news-detail">
      <Container>
        <div className="news-detail-wrapper">
          <div className="news-detail-hero">
            <img 
              src={newsItem.image} 
              alt={newsItem.title} 
              className="news-hero-img" 
              loading="lazy"
            />
            <div className="news-hero-content">
              <span className="news-date">
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                Ngày đăng: {newsItem.date}
              </span>
              <h1 className="news-title">{newsItem.title}</h1>
            </div>
          </div>
          
          <div className="news-detail-content">
            <div className="news-content-inner">
              <p className="news-desc intro">{newsItem.description}</p>
              
              <div className="news-body-mock">
                <p>
                  Trong bối cảnh nền kinh tế toàn cầu đang có nhiều biến động, việc đẩy mạnh các hoạt động xúc tiến thương mại 
                  và giao thương quốc tế đóng vai trò vô cùng quan trọng đối với các doanh nghiệp Việt Nam. Đặc biệt, thị trường Bắc Mỹ 
                  với quy mô rộng lớn và sức mua dồi dào luôn là điểm đến hấp dẫn mà nhiều doanh nghiệp hướng tới.
                </p>
                <p>
                  Sự kiện này không chỉ mang lại cơ hội mở rộng thị trường mà còn là nơi giao lưu, chia sẻ kinh nghiệm quý báu 
                  từ các chuyên gia hàng đầu trong ngành. Qua đó, các doanh nghiệp có thể nắm bắt được xu hướng tiêu dùng, 
                  yêu cầu về tiêu chuẩn chất lượng và những quy định pháp lý mới nhất tại thị trường mục tiêu.
                </p>
                <h3>Cơ hội và Thách thức</h3>
                <p>
                  Một trong những thách thức lớn nhất mà doanh nghiệp gặp phải là việc đáp ứng các tiêu chuẩn khắt khe về chất lượng 
                  sản phẩm cũng như quy trình sản xuất bền vững. Tuy nhiên, nếu vượt qua được, đây sẽ là cơ hội để nâng cao năng lực 
                  cạnh tranh, khẳng định vị thế thương hiệu trên trường quốc tế.
                </p>
              </div>
              
              <div className="news-tags">
                <span className="tag-label">Từ khóa:</span>
                <span className="tag">Giao thương</span>
                <span className="tag">Việt Mỹ</span>
                <span className="tag">Sự kiện</span>
                <span className="tag">Kinh tế</span>
              </div>
              
              <div className="news-share">
                <span>Chia sẻ bài viết:</span>
                <div className="share-buttons">
                  <a href="#" className="share-btn facebook" aria-label="Share on Facebook">
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  </a>
                  <a href="#" className="share-btn twitter" aria-label="Share on Twitter">
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                  </a>
                  <a href="#" className="share-btn linkedin" aria-label="Share on LinkedIn">
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default NewsDetail;
