import React from 'react';

const FilterCheckBox = () => {
  return (
    <label className="checkbox">
      <input type="checkbox" className="checkbox__input" />
      <span className="checkbox__custom">Короткометражки</span>
    </label>
  );
};

export default FilterCheckBox;
