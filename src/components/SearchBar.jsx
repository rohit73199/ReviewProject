import React, { useState } from 'react';
import './SearchBar.css';
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search puppy,cat,etc..."
        value={searchTerm}
        onChange={handleSearchChange}
        />
        <button >Search</button>
      
    </div>
  );
};
export default SearchBar;