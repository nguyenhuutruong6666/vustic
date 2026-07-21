import './Search.scss';

function Search({ totalResults, placeholder = "Hãy nhập thông tin", onSearch }) {
  return (
    <div className="search-container">
      <div className="search-results-count">
        {totalResults !== undefined && `${totalResults} kết quả`}
      </div>
      <form 
        className="search-form" 
        onSubmit={(e) => { 
          e.preventDefault(); 
          onSearch?.(e.target.search.value); 
        }}
      >
        <div className="search-input-wrapper">
          <svg className="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input 
            type="text" 
            name="search" 
            placeholder={placeholder} 
            className="search-input" 
          />
        </div>
        <button type="submit" className="search-button">Tìm kiếm</button>
      </form>
    </div>
  );
}

export default Search;
