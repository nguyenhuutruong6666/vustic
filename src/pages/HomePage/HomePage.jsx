import Hero from '../../components/compage/Hero/Hero';

import AboutSection from './AboutSection/AboutSection';
import ServicesSection from './ServicesSection/ServicesSection';
import OperationMapSection from './OperationMapSection/OperationMapSection';
import ProjectsSection from './ProjectsSection/ProjectsSection';
import NewsSection from './NewsSection/NewsSection';
import ContactBanner from '../../components/compage/ContactBanner/ContactBanner';

function HomePage() {
  return (
    <div className="home-page">
      <Hero title="CẦU NỐI THỊNH VƯỢNG VIỆT - MỸ" />
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
