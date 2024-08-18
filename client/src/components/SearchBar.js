import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-container">
      <button className="filter-button" data-testid="filter-button">
        <i className="fas fa-filter"></i>
      </button>
      <input type="text" placeholder="Type here to search" className="search-input" data-testid="search-input" />
      <button className="search-button" data-testid="search-button">
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
};

export default SearchBar;
