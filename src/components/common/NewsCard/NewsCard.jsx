import { Link } from 'react-router';
import './NewsCard.scss';

function NewsCard({ article }) {
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('vi-VN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  };

  return (
    <div className="news-card">
      <div className="news-card-image">
        {article.image ? (
          <img src={article.image} alt={article.title} />
        ) : (
          <div className="news-card-placeholder">📰</div>
        )}
      </div>
      <div className="news-card-content">
        <div className="news-card-meta">
          <span className="news-card-date">{formatDate(article.date)}</span>
          <span className="news-card-category">{article.category}</span>
        </div>
        <h3 className="news-card-title">
          <Link to={`/tin-tuc/${article.id}`}>{article.title}</Link>
        </h3>
        <p className="news-card-summary">{article.summary}</p>
        <Link to={`/tin-tuc/${article.id}`} className="news-card-link">
          Đọc thêm →
        </Link>
      </div>
    </div>
  );
}

export default NewsCard;
