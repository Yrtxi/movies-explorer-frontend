import React from 'react';
import FilterCheckBox from '../FilterCheckBox/FilterCheckBox';

const SearchForm = () => {
  return (
    <section className="search">
      <form className="search__form">
        <label className='search__form-field'>
          <input
            type="text"
            placeholder="Фильм"
            className="search__input"
            required
          />
          <button type="submit" className="search__btn"></button>
        </label>
        <FilterCheckBox />
      </form>
    </section>
  );
};

export default SearchForm;
