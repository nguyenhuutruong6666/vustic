import Hero from '../../components/compage/Hero/Hero';
import PartnersList from './PartnersList/PartnersList';
import ContactBanner from '../../components/compage/ContactBanner/ContactBanner';

function PartnersPage() {
  return (
    <div className="partners-page">
      <Hero title="ĐỐI TÁC" />
      <PartnersList />
      <ContactBanner />
    </div>
  );
}

export default PartnersPage;
