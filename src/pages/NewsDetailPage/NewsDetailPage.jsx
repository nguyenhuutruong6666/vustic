import { useParams } from 'react-router';
import NewsDetail from '../../components/compage/NewsDetail/NewsDetail';
import { newsItems } from '../../services/NewsSection';

function NewsDetailPage() {
  const { id } = useParams();
  const newsItem = newsItems.find(item => item.id === parseInt(id));

  if (!newsItem) {
    return (
      <div style={{ paddingTop: '150px', textAlign: 'center', minHeight: '60vh' }}>
        <h2>Không tìm thấy tin tức</h2>
      </div>
    );
  }

  return (
    <main className="news-detail-page">
      <NewsDetail newsItem={newsItem} />
    </main>
  );
}

export default NewsDetailPage;
