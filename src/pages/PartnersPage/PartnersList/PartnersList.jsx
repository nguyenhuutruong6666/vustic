import { useState } from 'react';
import Container from '../../../components/common/Container/Container';
import { partnerCategories, featuredPartner, partners } from '../../../services/PartnersList';
import './PartnersList.scss';

function PartnersList() {
  const [activeTab, setActiveTab] = useState('Tất cả');

  return (
    <section className="partners-list-section section">
      <Container>
        <h2 className="partners-list-title">ĐỐI TÁC CỦA CHÚNG TÔI</h2>
        
        <div className="partners-tabs">
          {partnerCategories.map(danhmuc => (
            <button 
              key={danhmuc} 
              className={`partners-tab ${activeTab === danhmuc ? 'active' : ''}`}
              onClick={() => setActiveTab(danhmuc)}
            >
              {danhmuc}
            </button>
          ))}
        </div>

        {activeTab === 'Tất cả' && (
          <div className="partners-featured">
            <div className="pf-image">
              <img src={featuredPartner.bgImage} alt={featuredPartner.name} className="pf-bg" />
              <div className="pf-logo-overlay">
                <div className="pf-logo-box">
                  <img src={featuredPartner.logo} alt="Logo" />
                </div>
                <div className="pf-logo-text">
                  <span className="badge">{featuredPartner.category.toUpperCase()}</span>
                  <h3>{featuredPartner.name}</h3>
                </div>
              </div>
            </div>
            <div className="pf-content">
              <div className="pf-content-logo">
                 <img src={featuredPartner.contentLogo} alt="Featured Partner Logo" />
              </div>
              <h3 className="pf-content-title">{featuredPartner.title}</h3>
              <p>{featuredPartner.description}</p>
            </div>
          </div>
        )}

        <div className="partners-grid">
          {partners
            .filter(p => activeTab === 'Tất cả' || p.category === activeTab)
            .map(partner => (
            <div className="partner-card" key={partner.id}>
              <div className="partner-card-logo">
                <img src={partner.logo} alt={partner.name} />
              </div>
              <div className="partner-card-info">
                <h4>{partner.name}</h4>
                <div className="partner-card-badges">
                  <span className="badge">{partner.category.toUpperCase()}</span>
                  <span className="badge">{partner.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default PartnersList;
