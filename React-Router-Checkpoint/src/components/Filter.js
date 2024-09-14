import React from 'react';
import './Filter.css';

const Filter = ({ setTitleFilter, setRatingFilter }) => {
  return (
    <div className="filter">
      <input type="text" placeholder="filtre par titre de film..." onChange={(e) => setTitleFilter(e.target.value)} />
      <input type="number" placeholder="Avis..." min="0" max="10" step="0.1" onChange={(e) => setRatingFilter(e.target.value)} />
    </div>
  );
};

export default Filter;
