import Hero from '../../components/compage/Hero/Hero';
import VisionMission from './VisionMission/VisionMission';
import CoreValues from './CoreValues/CoreValues';
import StrategicRole from './StrategicRole/StrategicRole';
import OrganizationChart from './OrganizationChart/OrganizationChart';
import ContactBanner from '../../components/compage/ContactBanner/ContactBanner';

function AboutPage() {
  return (
    <div className="about-page">
      <Hero title="VỀ CHÚNG TÔI" />
      <VisionMission />
      <CoreValues />
      <StrategicRole />
      <OrganizationChart />
      <ContactBanner />
    </div>
  );
}

export default AboutPage;
