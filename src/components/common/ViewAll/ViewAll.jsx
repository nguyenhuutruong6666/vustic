import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import './ViewAll.scss';

function ViewAll({ href, className }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <Link 
      ref={ref}
      to={href} 
      className={`view-all-btn ${className || ''} ${isVisible ? 'animate-pop-in' : 'opacity-0'}`}
    >
      Xem tất cả
    </Link>
  );
}

export default ViewAll;
