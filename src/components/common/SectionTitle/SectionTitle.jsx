import './SectionTitle.scss';

function SectionTitle({ subtitle, title, description, align = 'center', light = false }) {
  return (
    <div className={`section-title section-title-${align} ${light ? 'section-title-light' : ''}`}>
      {subtitle && <span className="section-title-subtitle">{subtitle}</span>}
      <h2 className="section-title-heading">{title}</h2>
      {description && <p className="section-title-description">{description}</p>}
    </div>
  );
}

export default SectionTitle;
