import React from 'react';

function Filter({ goodDogs, onFilterClick }) {

  return (
    <div id="filter-div">
      <button id="good-dog-filter" onClick={onFilterClick}>Filter good dogs: {goodDogs ? "ON" : "OFF"}</button>
    </div>
  )
}

export default Filter;