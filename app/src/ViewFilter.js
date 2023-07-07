import React from 'react';

const ViewFilter = ({ filter, handleFilterChange }) => {
  return (
    <div className="filter-btns">
      <button
        onClick={() => handleFilterChange('all')}
        className={filter === 'all' ? 'active' : ''}
      >
        All
      </button>
      <button
        onClick={() => handleFilterChange('active')}
        className={filter === 'active' ? 'active' : ''}
      >
        Active
      </button>
      <button
        onClick={() => handleFilterChange('completed')}
        className={filter === 'completed' ? 'active' : ''}
      >
        Completed
      </button>
    </div>
  );
};

export default ViewFilter;

//allows for user to change view of filtered items by "category"/filter