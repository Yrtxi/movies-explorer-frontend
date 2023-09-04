import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoreFilmsButton from '../MoreFilmsButton/MoreFilmsButton';

const Movies = () => {
  return (
    <>
      <SearchForm />
      <MoviesCardList />
      <MoreFilmsButton/>
    </>
  );
};

export default Movies;
