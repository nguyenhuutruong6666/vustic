import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router';
import { menuItems } from '../../../services/menuItems';
import Container from '../../common/Container/Container';
import './Header.scss';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMegaTab, setActiveMegaTab] = useState(1);
  const [openMobileMenus, setOpenMobileMenus] = useState([]);
  const [activeHoverMenu, setActiveHoverMenu] = useState(null);

  const toggleMobileMenu = (key, e) => {
    if (e) e.preventDefault();
    setOpenMobileMenus((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

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
    setActiveHoverMenu(null);
  };

  const handleLogoClick = () => {
    closeMenu();
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
            <Link to="/" className="header-logo" onClick={handleLogoClick}>
              <img src="/logo.png" alt="VUSTIC JSC" className="header-logo-img" />
            </Link>

            <nav className={`header-nav ${isMenuOpen ? 'header-nav-open' : ''}`}>
              <ul className="header-menu">
                {menuItems.map((item) => (
                  <li 
                    key={item.id} 
                    className="header-menu-item"
                    onMouseEnter={() => setActiveHoverMenu(item.id)}
                    onMouseLeave={() => setActiveHoverMenu(null)}
                  >
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `header-menu-link ${isActive ? 'header-menu-link-active' : ''}`
                      }
                      onClick={(e) => {
                        if (item.label === 'Giới thiệu' && window.innerWidth <= 768) {
                          e.preventDefault();
                          toggleMobileMenu('aboutMain');
                        } else {
                          closeMenu();
                        }
                      }}
                    >
                      {item.label}
                      {item.label === 'Giới thiệu' && (
                        <svg className={`menu-arrow ${openMobileMenus.includes('aboutMain') ? 'open' : ''}`} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      )}
                    </NavLink>
                    {item.label === 'Giới thiệu' && (
                      <>
                        <div className={`mega-menu ${activeHoverMenu === item.id ? 'open' : ''}`}>
                          <div className="mega-menu-inner">
                            <div className="mega-menu-sidebar">
                              <ul>
                                <li className={activeMegaTab === 1 ? 'active' : ''} onMouseEnter={() => setActiveMegaTab(1)}>Giới thiệu 1</li>
                                <li className={activeMegaTab === 2 ? 'active' : ''} onMouseEnter={() => setActiveMegaTab(2)}>Giới thiệu 2</li>
                                <li className={activeMegaTab === 3 ? 'active' : ''} onMouseEnter={() => setActiveMegaTab(3)}>Giới thiệu 3</li>
                              </ul>
                            </div>
                            <div className="mega-menu-content">
                              {activeMegaTab === 1 && (
                                <div className="mega-menu-grid">
                                  <div className="mega-menu-col">
                                    <h4>Giới thiệu chi tiết 1</h4>
                                    <ul>
                                      <li><Link to="/gioi-thieu" onClick={closeMenu}>Giới thiệu chi tiết 1A</Link></li>
                                      <li><Link to="/gioi-thieu" onClick={closeMenu}>Giới thiệu chi tiết 1B</Link></li>
                                      <li><Link to="/gioi-thieu" onClick={closeMenu}>Giới thiệu chi tiết 1C</Link></li>
                                    </ul>
                                  </div>
                                  <div className="mega-menu-col">
                                    <h4>Giới thiệu chi tiết 2</h4>
                                    <ul>
                                      <li><Link to="/gioi-thieu" onClick={closeMenu}>Giới thiệu chi tiết 2A</Link></li>
                                      <li><Link to="/gioi-thieu" onClick={closeMenu}>Giới thiệu chi tiết 2B</Link></li>
                                      <li><Link to="/gioi-thieu" onClick={closeMenu}>Giới thiệu chi tiết 2C</Link></li>
                                    </ul>
                                  </div>
                                  <div className="mega-menu-col">
                                    <h4>Giới thiệu chi tiết 3</h4>
                                    <ul>
                                      <li><Link to="/gioi-thieu" onClick={closeMenu}>Giới thiệu chi tiết 3A</Link></li>
                                      <li><Link to="/gioi-thieu" onClick={closeMenu}>Giới thiệu chi tiết 3B</Link></li>
                                      <li><Link to="/gioi-thieu" onClick={closeMenu}>Giới thiệu chi tiết 3C</Link></li>
                                    </ul>
                                  </div>
                                </div>
                              )}
                              {activeMegaTab === 2 && (
                                <div className="mega-menu-grid">
                                  <div className="mega-menu-col">
                                    <h4>Nội dung Giới thiệu 2</h4>
                                    <ul>
                                      <li><Link to="/gioi-thieu" onClick={closeMenu}>Chi tiết 2A</Link></li>
                                    </ul>
                                  </div>
                                </div>
                              )}
                              {activeMegaTab === 3 && (
                                <div className="mega-menu-grid">
                                  <div className="mega-menu-col">
                                    <h4>Nội dung Giới thiệu 3</h4>
                                    <ul>
                                      <li><Link to="/gioi-thieu" onClick={closeMenu}>Chi tiết 3A</Link></li>
                                    </ul>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className={`mobile-submenu ${openMobileMenus.includes('aboutMain') ? 'open' : ''}`}>
                          <ul>
                            <li className="mobile-submenu-item">
                              <div 
                                className="mobile-submenu-link level-1" 
                                onClick={(e) => toggleMobileMenu('tab1', e)}
                              >
                                Giới thiệu 1
                                <svg className={`menu-arrow ${openMobileMenus.includes('tab1') ? 'open' : ''}`} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                  <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                              </div>
                              <div className={`mobile-sub-submenu ${openMobileMenus.includes('tab1') ? 'open' : ''}`}>
                                <ul>

                                  <li className="mobile-submenu-item">
                                    <div 
                                      className="mobile-submenu-link level-2" 
                                      onClick={(e) => toggleMobileMenu('col1_1', e)}
                                    >
                                      Giới thiệu chi tiết 1
                                      <svg className={`menu-arrow ${openMobileMenus.includes('col1_1') ? 'open' : ''}`} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                      </svg>
                                    </div>
                                    <div className={`mobile-sub-submenu ${openMobileMenus.includes('col1_1') ? 'open' : ''}`}>
                                      <ul>
                                        <li><Link className="level-3" to="/gioi-thieu" onClick={closeMenu}>Giới thiệu chi tiết 1A</Link></li>
                                        <li><Link className="level-3" to="/gioi-thieu" onClick={closeMenu}>Giới thiệu chi tiết 1B</Link></li>
                                        <li><Link className="level-3" to="/gioi-thieu" onClick={closeMenu}>Giới thiệu chi tiết 1C</Link></li>
                                      </ul>
                                    </div>
                                  </li>

                                  <li className="mobile-submenu-item">
                                    <div 
                                      className="mobile-submenu-link level-2" 
                                      onClick={(e) => toggleMobileMenu('col1_2', e)}
                                    >
                                      Giới thiệu chi tiết 2
                                      <svg className={`menu-arrow ${openMobileMenus.includes('col1_2') ? 'open' : ''}`} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                      </svg>
                                    </div>
                                    <div className={`mobile-sub-submenu ${openMobileMenus.includes('col1_2') ? 'open' : ''}`}>
                                      <ul>
                                        <li><Link className="level-3" to="/gioi-thieu" onClick={closeMenu}>Giới thiệu chi tiết 2A</Link></li>
                                        <li><Link className="level-3" to="/gioi-thieu" onClick={closeMenu}>Giới thiệu chi tiết 2B</Link></li>
                                        <li><Link className="level-3" to="/gioi-thieu" onClick={closeMenu}>Giới thiệu chi tiết 2C</Link></li>
                                      </ul>
                                    </div>
                                  </li>

                                  <li className="mobile-submenu-item">
                                    <div 
                                      className="mobile-submenu-link level-2" 
                                      onClick={(e) => toggleMobileMenu('col1_3', e)}
                                    >
                                      Giới thiệu chi tiết 3
                                      <svg className={`menu-arrow ${openMobileMenus.includes('col1_3') ? 'open' : ''}`} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                      </svg>
                                    </div>
                                    <div className={`mobile-sub-submenu ${openMobileMenus.includes('col1_3') ? 'open' : ''}`}>
                                      <ul>
                                        <li><Link className="level-3" to="/gioi-thieu" onClick={closeMenu}>Giới thiệu chi tiết 3A</Link></li>
                                        <li><Link className="level-3" to="/gioi-thieu" onClick={closeMenu}>Giới thiệu chi tiết 3B</Link></li>
                                        <li><Link className="level-3" to="/gioi-thieu" onClick={closeMenu}>Giới thiệu chi tiết 3C</Link></li>
                                      </ul>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </li>

                            <li className="mobile-submenu-item">
                              <div 
                                className="mobile-submenu-link level-1" 
                                onClick={(e) => toggleMobileMenu('tab2', e)}
                              >
                                Giới thiệu 2
                                <svg className={`menu-arrow ${openMobileMenus.includes('tab2') ? 'open' : ''}`} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                  <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                              </div>
                              <div className={`mobile-sub-submenu ${openMobileMenus.includes('tab2') ? 'open' : ''}`}>
                                <ul>
                                  <li className="mobile-submenu-item">
                                    <div 
                                      className="mobile-submenu-link level-2" 
                                      onClick={(e) => toggleMobileMenu('col2_1', e)}
                                    >
                                      Nội dung Giới thiệu 2
                                      <svg className={`menu-arrow ${openMobileMenus.includes('col2_1') ? 'open' : ''}`} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                      </svg>
                                    </div>
                                    <div className={`mobile-sub-submenu ${openMobileMenus.includes('col2_1') ? 'open' : ''}`}>
                                      <ul>
                                        <li><Link className="level-3" to="/gioi-thieu" onClick={closeMenu}>Chi tiết 2A</Link></li>
                                      </ul>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </li>

                            <li className="mobile-submenu-item">
                              <div 
                                className="mobile-submenu-link level-1" 
                                onClick={(e) => toggleMobileMenu('tab3', e)}
                              >
                                Giới thiệu 3
                                <svg className={`menu-arrow ${openMobileMenus.includes('tab3') ? 'open' : ''}`} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                  <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                              </div>
                              <div className={`mobile-sub-submenu ${openMobileMenus.includes('tab3') ? 'open' : ''}`}>
                                <ul>
                                  <li className="mobile-submenu-item">
                                    <div 
                                      className="mobile-submenu-link level-2" 
                                      onClick={(e) => toggleMobileMenu('col3_1', e)}
                                    >
                                      Nội dung Giới thiệu 3
                                      <svg className={`menu-arrow ${openMobileMenus.includes('col3_1') ? 'open' : ''}`} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                      </svg>
                                    </div>
                                    <div className={`mobile-sub-submenu ${openMobileMenus.includes('col3_1') ? 'open' : ''}`}>
                                      <ul>
                                        <li><Link className="level-3" to="/gioi-thieu" onClick={closeMenu}>Chi tiết 3A</Link></li>
                                      </ul>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </>
                    )}
                  </li>
                ))}
              </ul>
              <div className="header-mobile-contact">
                <Link to="/lien-he" className="header-contact-btn-mobile" onClick={closeMenu}>
                  LIÊN HỆ
                </Link>
              </div>
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
