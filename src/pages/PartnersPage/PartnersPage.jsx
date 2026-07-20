import PartnersHero from './PartnersHero/PartnersHero';
import PartnersList from './PartnersList/PartnersList';
import ContactBanner from './ContactBanner/ContactBanner';

function PartnersPage() {
  return (
    <div className="partners-page">
      <PartnersHero />
      <PartnersList />
      <ContactBanner />
    </div>
  );
}

export default PartnersPage;
