import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router';
import { menuItems } from '../../../data/menuItems';
import Container from '../../common/Container/Container';
import './Header.scss';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="header-top">
        <Container>
          <div className="header-top-inner">
            <div className="header-socials">
              <a href="#" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
              </a>
              <a href="#" aria-label="Youtube">
                <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                  <path d="M21.582 6.186a2.665 2.665 0 0 0-1.876-1.884C17.92 3.843 12 3.843 12 3.843s-5.92 0-7.706.459a2.665 2.665 0 0 0-1.876 1.884C1.95 7.973 1.95 12 1.95 12s0 4.027.468 5.814a2.665 2.665 0 0 0 1.876 1.884c1.786.459 7.706.459 7.706.459s5.92 0 7.706-.459a2.665 2.665 0 0 0 1.876-1.884c.468-1.787.468-5.814.468-5.814s0-4.027-.468-5.814zM9.98 15.437V8.562L15.655 12z"/>
                </svg>
              </a>
              <a href="#" aria-label="TikTok">
                <svg viewBox="0 0 448 512" fill="currentColor" width="14" height="14">
                  <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/>
                </svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
            </div>
            <div className="header-lang">
              <span className="lang-flag">🇻🇳</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 10l5 5 5-5z" />
              </svg>
            </div>
          </div>
        </Container>
      </div>

      <div className="header-main">
        <Container>
          <div className="header-container">
            <Link to="/" className="header-logo" onClick={closeMenu}>
              <img src="/logo.png" alt="VUSTIC JSC" className="header-logo-img" />
            </Link>

            <nav className={`header-nav ${isMenuOpen ? 'header-nav-open' : ''}`}>
              <ul className="header-menu">
                {menuItems.map((item) => (
                  <li key={item.id} className="header-menu-item">
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `header-menu-link ${isActive ? 'header-menu-link-active' : ''}`
                      }
                      onClick={closeMenu}
                    >
                      {item.label}
                      {item.label === 'Giới thiệu' && (
                        <svg className="menu-arrow" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                          {/* <path d="M7 10l5 5 5-5z" /> */}
                        </svg>
                      )}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="header-actions">
              <Link to="/lien-he" className="header-contact-btn">
                LIÊN HỆ
              </Link>
              <button
                className={`header-hamburger ${isMenuOpen ? 'header-hamburger-active' : ''}`}
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
}

export default Header;
