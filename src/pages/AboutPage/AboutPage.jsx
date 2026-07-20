import AboutHero from './AboutHero/AboutHero';
import VisionMission from './VisionMission/VisionMission';
import CoreValues from './CoreValues/CoreValues';
import StrategicRole from './StrategicRole/StrategicRole';
import OrganizationChart from './OrganizationChart/OrganizationChart';
import ContactBanner from '../HomePage/ContactBanner/ContactBanner';

function AboutPage() {
  return (
    <div className="about-page">
      <AboutHero />
      <VisionMission />
      <CoreValues />
      <StrategicRole />
      <OrganizationChart />
      <ContactBanner />
    </div>
  );
}

export default AboutPage;
