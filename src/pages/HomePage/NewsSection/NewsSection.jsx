import Container from '../../../components/common/Container/Container';
import './NewsSection.scss';
import { newsItems } from '../../../services/NewsSection';
import ViewAll from '../../../components/common/ViewAll/ViewAll';
import { Link } from 'react-router';

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
          {newsItems.slice(0, 3).map((item) => (
            <div key={item.id} className="news-card">
              <Link to={`/tin-tuc/${item.id}`} className="news-card-image">
                <img src={item.image} alt={item.title} className="news-card-img" loading="lazy" />
              </Link>
              <div className="news-card-content">
                <span className="news-card-date">{item.date}</span>
                <Link to={`/tin-tuc/${item.id}`} className="news-card-title-link">
                  <h3 className="news-card-title">{item.title}</h3>
                </Link>
                <p className="news-card-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="news-section-footer">
          <ViewAll href="/tin-tuc" className="news-section-btn" />
        </div>
      </Container>
    </section>
  );
}

export default NewsSection;
