import React from 'react';
import SearchBar from './SearchBar';

const Header = ({ fetchMovies }) => (
  <header>
    <h1>Movie Explorer</h1>
    <div id="search-container">
      <SearchBar onSearch={fetchMovies} />
    </div>
  </header>
);

export default Header;