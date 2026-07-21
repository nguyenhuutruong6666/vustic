import { useState } from 'react';
import Container from '../../../components/common/Container/Container';
import './GallerySection.scss';
import { galleryImages } from '../../../services/GallerySection';

function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);
  const images = galleryImages;

  return (
    <section className="gallery-section section">
      <Container>
        <div className="gallery-section-header">
          <h2 className="gallery-section-title">HÌNH ẢNH</h2>
          <p className="gallery-section-subtitle">
            Công nghiệp hóa, hiện đại hóa và mang sản phẩm hàng hóa, dịch vụ xuất xứ Việt Nam tiếp cận thị trường Mỹ
          </p>
        </div>

        <div className="gallery-grid">
          {images.map((img) => (
            <div 
              key={img.id} 
              className={`gallery-item ${img.className}`}
              onClick={() => setSelectedImage(img.src)}
            >
              <img src={img.src} alt={`Gallery ${img.id}`} loading="lazy" />
            </div>
          ))}
        </div>
      </Container>

      {selectedImage && (
        <div className="gallery-lightbox" onClick={() => setSelectedImage(null)}>
          <button className="gallery-lightbox-close" onClick={() => setSelectedImage(null)}>&times;</button>
          <img 
            src={selectedImage} 
            alt="Full screen" 
            className="gallery-lightbox-img" 
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}
    </section>
  );
}

export default GallerySection;
