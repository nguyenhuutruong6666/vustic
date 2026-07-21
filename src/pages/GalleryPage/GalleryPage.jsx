import GalleryHero from './GalleryHero/GalleryHero';
import GallerySection from './GallerySection/GallerySection';
import ContactBanner from './ContactBanner/ContactBanner';

function GalleryPage() {
  return (
    <div className="gallery-page">
      <GalleryHero />
      <GallerySection />
      <ContactBanner />
    </div>
  );
}

export default GalleryPage;
