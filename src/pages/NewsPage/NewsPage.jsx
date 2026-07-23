import Hero from '../../components/compage/Hero/Hero';
import NewsSection from './NewsSection/NewsSection';
import ContactBanner from '../../components/compage/ContactBanner/ContactBanner';

function NewsPage() {
  return (
    <div className="news-page">
      <Hero title="TIN TỨC" />
      <NewsSection />
      <ContactBanner />
    </div>
  );
}

export default NewsPage;
