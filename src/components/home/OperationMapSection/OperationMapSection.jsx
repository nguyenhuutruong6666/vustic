import Container from '../../common/Container/Container';
import './OperationMapSection.scss';

const data = [
  { id: 1, name: 'Châu Á', value: '40.0 ($ nghìn tỷ)', percent: '36.4 %', color: '#f44336' },
  { id: 2, name: 'Bắc Mỹ', value: '34.1 ($ nghìn tỷ)', percent: '31.0 %', color: '#2196f3' },
  { id: 3, name: 'Châu Âu', value: '27.0 ($ nghìn tỷ)', percent: '24.5 %', color: '#ff9800' },
  { id: 4, name: 'Nam,Trung Mỹ', value: '2.7 ($ nghìn tỷ)', percent: '2.5 %', color: '#9c27b0' },
  { id: 5, name: 'Châu Phi', value: '2.8 ($ nghìn tỷ)', percent: '2.5 %', color: '#8bc34a' },
  { id: 6, name: 'Khác', value: '1.9 ($ nghìn tỷ)', percent: '2.1 %', color: '#9e9e9e' }
];

function OperationMapSection() {
  return (
    <section className="operation-map-section section">
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
            <div className="map-placeholder">
              <span>Bản đồ thế giới sẽ hiển thị ở đây</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default OperationMapSection;
