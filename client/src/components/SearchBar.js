import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ list, onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    const filtered = list.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    onSearch(filtered);
  };

  return (
    <div>
      <div className="search-container">
        <button className="filter-button" data-testid="filter-button" aria-label="Filter options">
          <i className="fas fa-filter"></i>
        </button>
        <input
          type="text"
          placeholder="Type here to search"
          className="search-input"
          data-testid="search-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="search-button"data-testid="search-button"onClick={handleSearch} aria-label="Search">
          <i className="fas fa-search"></i>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
