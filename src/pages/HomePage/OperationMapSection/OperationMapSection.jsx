import Container from '../../../components/common/Container/Container';
import './OperationMapSection.scss';
import { data } from '../../../services/OperationMapSection';

function OperationMapSection() {
  return (
    <section className="operation-map-section">
      <Container>
        <div className="operation-map-grid">
          <div className="operation-map-stats">
            <h2 className="operation-map-title">Quy mô kinh tế<br/>theo khu vực</h2>
            
            <div className="operation-map-gdp">
              <span className="gdp-label">GDP ước tính:</span>
              <span className="gdp-value">105.7 tỉ USD</span>
              <span className="gdp-badge">BẮC MỸ</span>
            </div>

            <div className="operation-map-weight">
              <span className="weight-label">Tỷ trọng:</span>
              <div className="weight-bar">
                {data.map((item) => (
                  <div 
                    key={item.id} 
                    className="weight-bar-segment" 
                    style={{ width: item.percent, backgroundColor: item.color }}
                  ></div>
                ))}
              </div>
            </div>

            <ul className="operation-map-list">
              {data.map((item) => (
                <li key={item.id} className="operation-map-list-item">
                  <div className="item-name">
                    <span className="item-dot" style={{ backgroundColor: item.color }}></span>
                    {item.name}
                  </div>
                  <div className="item-value">{item.value}</div>
                  <div className="item-percent">{item.percent}</div>
                </li>
              ))}
            </ul>
          </div>

          <div className="operation-map-visual">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15659850.596001007!2d98.71869818809477!3d15.53927641211756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31157a4d736a1e5f%3A0xb03bb0c9e2fe62be!2sVietnam!5e0!3m2!1sen!2s!4v1689234857492!5m2!1sen!2s" 
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: '400px' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="External Map"
              className="world-map-iframe"
            ></iframe>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default OperationMapSection;
