import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import films from '../../data';

const MoviesCardList = () => {
  return (
    <section className="movies-cards">
      {films.map((film, index) => (
       <MovieCard key={index} title={film.title} link={film.link}/>
     ))}
    </section>
  );
};

export default MoviesCardList;
