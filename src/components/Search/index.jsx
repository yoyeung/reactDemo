import React from 'react';

const Search = ({ filter }) => (
  <div className="search">
    <input placeholder="&#xF002; 搜尋" onChange={filter} />
  </div>
)

export default Search;