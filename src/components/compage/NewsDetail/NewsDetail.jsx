import './NewsDetail.scss';
import Container from '../../common/Container/Container';

function NewsDetail({ newsItem }) {
  if (!newsItem) return null;

  return (
    <section className="news-detail section">
      <Container>
        <div className="news-detail-wrapper">
          <header className="news-detail-header">
            <h1 className="news-title">{newsItem.title}</h1>
            <span className="news-date">Ngày đăng: {newsItem.date}</span>
          </header>
          
          <div className="news-detail-image-wrapper">
            <img 
              src={newsItem.image} 
              alt={newsItem.title} 
              className="news-image" 
              loading="lazy"
            />
          </div>
          
          <div className="news-detail-content">
            <p className="news-desc">{newsItem.description}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default NewsDetail;
