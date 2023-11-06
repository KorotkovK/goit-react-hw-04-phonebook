import React from 'react';

const Filter = ({ filter, onFilterChange }) => {
  return (
    <input
      type="text"
      value={filter}
      onChange={(e) => onFilterChange(e.target.value)}
      placeholder="Search contacts"
    />
  );
};

export default Filter;
