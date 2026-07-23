import Hero from '../../components/compage/Hero/Hero';
import GallerySection from './GallerySection/GallerySection';
import ContactBanner from '../../components/compage/ContactBanner/ContactBanner';

function GalleryPage() {
  return (
    <div className="gallery-page">
      <Hero title="HÌNH ẢNH" />
      <GallerySection />
      <ContactBanner />
    </div>
  );
}

export default GalleryPage;
