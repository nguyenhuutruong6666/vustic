import NewHero from './NewHero/NewHero';
import NewsSection from './NewsSection/NewsSection';
import ContactBanner from './ContactBanner/ContactBanner';

function NewsPage() {
  return (
    <div className="news-page">
      <NewHero />
      <NewsSection />
      <ContactBanner />
    </div>
  );
}

export default NewsPage;
