import HeroSection from './HeroSection/HeroSection';
import AboutSection from './AboutSection/AboutSection';
import ServicesSection from './ServicesSection/ServicesSection';
import OperationMapSection from './OperationMapSection/OperationMapSection';
import ProjectsSection from './ProjectsSection/ProjectsSection';
import NewsSection from './NewsSection/NewsSection';
import ContactBanner from './ContactBanner/ContactBanner';
import './HomePage.scss';

function HomePage() {
  return (
    <div className="home-page">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <OperationMapSection />
      <ProjectsSection />
      <NewsSection />
      <ContactBanner />
    </div>
  );
}

export default HomePage;
