import HeroSection from '../../components/home/HeroSection/HeroSection';
import AboutSection from '../../components/home/AboutSection/AboutSection';
import ServicesSection from '../../components/home/ServicesSection/ServicesSection';
import OperationMapSection from '../../components/home/OperationMapSection/OperationMapSection';
import ProjectsSection from '../../components/home/ProjectsSection/ProjectsSection';
import NewsSection from '../../components/home/NewsSection/NewsSection';
import ContactBanner from '../../components/home/ContactBanner/ContactBanner';
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
