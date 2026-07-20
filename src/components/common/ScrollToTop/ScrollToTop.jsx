import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router';

function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    document.documentElement.style.setProperty('scroll-behavior', 'auto', 'important');
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    const timeout = setTimeout(() => {
      document.documentElement.style.removeProperty('scroll-behavior');
    }, 50);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
