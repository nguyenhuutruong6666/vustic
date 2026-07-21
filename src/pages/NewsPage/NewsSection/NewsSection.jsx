import { useState } from 'react';
import Container from '../../../components/common/Container/Container';
import './NewsSection.scss';
import { newsItems } from '../../../services/NewsSection';
import Search from '../../../components/common/Search/Search';
import { Link } from 'react-router';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '../../../components/common/Pagination/Pagination';

function NewsSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const ITEMS_PER_PAGE = 9;

  const filteredItems = newsItems.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = filteredItems.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const handlePageChange = (page, e) => {
    e.preventDefault();
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section className="news-section section">
      <Container>
        <Search totalResults={searchTerm ? filteredItems.length : undefined} onSearch={handleSearch} />

        <div className="news-section-header">
          <h2 className="news-section-title">TIN TỨC & SỰ KIỆN</h2>
          <p className="news-section-subtitle">
            Cập nhật những tin tức, sự kiện từ VUSTIC
          </p>
        </div>

        {currentItems.length > 0 ? (
          <div className="news-section-grid">
            {currentItems.map((item) => (
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
        ) : (
          <div className="news-section-empty" style={{ textAlign: 'center', padding: '60px 0', color: '#666' }}>
            <p style={{ fontSize: '18px', fontWeight: '500' }}>Không có kết quả phù hợp</p>
          </div>
        )}

        {totalPages > 1 && (
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  href="#" 
                  onClick={(e) => handlePageChange(currentPage - 1, e)}
                  disabled={currentPage === 1}
                />
              </PaginationItem>
              
              {[...Array(totalPages)].map((_, i) => {
                const pageNumber = i + 1;
                return (
                  <PaginationItem key={pageNumber}>
                    <PaginationLink 
                      href="#" 
                      isActive={currentPage === pageNumber}
                      onClick={(e) => handlePageChange(pageNumber, e)}
                    >
                      {pageNumber}
                    </PaginationLink>
                  </PaginationItem>
                );
              })}
              
              <PaginationItem>
                <PaginationNext 
                  href="#" 
                  onClick={(e) => handlePageChange(currentPage + 1, e)}
                  disabled={currentPage === totalPages}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </Container>
    </section>
  );
}

export default NewsSection;
