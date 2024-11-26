import React from 'react';
import { FaSearch } from 'react-icons/fa'; // Import search icon from react-icons library
import './Search.css'; // Make sure this CSS file is created for styling

function Search({ searchQuery, setSearchQuery }) {
    return (
        <div className="search-container"> {/* Container for search input and icon */}
            <FaSearch className="search-icon" /> {/* Display search icon */}
            <input
                type="text"
                className="form-control search-input"
                placeholder="Search for a book..." // Placeholder text in English
                value={searchQuery} // Bind input value to searchQuery state
                onChange={(e) => setSearchQuery(e.target.value)} // Update searchQuery on input change
            />
        </div>
    );
}

export default Search;