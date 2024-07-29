import React, { useState } from 'react';
import { MagnifyingGlass } from "@phosphor-icons/react";

function SearchBar({onSearchChange}) {
 

  return (
    <div className="search-container"> {/* Optional class for overall styling */}
    
    <div className="search-input">  {/* Add a class for styling the input field */}
    <MagnifyingGlass/>
      <input
      
        type="text"
        id="search"
        placeholder="Search by name"
        onChange={(e) => onSearchChange(e.target.value)}
      >
        
      </input>
    </div>
  </div>
  );
}

export default SearchBar;