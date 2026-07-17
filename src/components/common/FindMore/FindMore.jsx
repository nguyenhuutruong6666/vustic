function FindMore({ href, className }) {
  return (
    <a href={href} className={className} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
      Tìm hiểu thêm
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12 5 19 12 12 19"></polyline>
      </svg>
    </a>
  );
}

export default FindMore;
