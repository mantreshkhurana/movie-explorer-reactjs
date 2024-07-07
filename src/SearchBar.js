import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    if (searchTerm) {
      onSearch(searchTerm);
    }
  };

  return (
    <div>
      <input
        type="text"
        id="search-bar"
        placeholder="Search for movies..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button id="search-button" onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;