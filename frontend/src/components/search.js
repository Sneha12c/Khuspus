import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    // <div className="search-bar">
    //   <input
    //     type="text"
    //     placeholder="Search by username"
    //     value={searchText}
    //     onChange={(e) => setSearchText(e.target.value)}
    //   />
    //   <button onClick={handleSearch}>Search</button>
    // </div>
    <li><i className="large material-icons" style={{ width: "100%", backgroundImage: 'url("https://cdn.create.vista.com/api/media/small/97843632/stock-photo-overhead-view-of-sherlock-hat-and-detective-tools-on-map")', backgroundSize: 'cover', backgroundPosition: 'center' } }>search</i></li>

  );
};

export default SearchBar;
