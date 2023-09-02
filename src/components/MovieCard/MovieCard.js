import { useState } from 'react';

const MovieCard = ({ title, link }) => {
  const [isSave, setSave] = useState(false);

  const buttonSaveClassName = `movie-card__btn-save ${
    isSave ? 'movie-card__btn-save_active' : ''
  }  `;

  const handleSaveButton = () => {
    setSave(!isSave);
  };

  return (
    <article className="movie-card">
      <img
        className="movie-card__poster"
        alt="постер к фильму"
        src={link}
      ></img>
      <button
        onClick={handleSaveButton}
        type="button"
        className={buttonSaveClassName}
      ></button>
      {/* <button type="button" className="movie-card__btn-del"></button> */}

      <div className="movie-card__content">
        <h2 className="movie-card__title">{title}</h2>
        <p className="movie-card__duration">1ч 17м</p>
      </div>
    </article>
  );
};

export default MovieCard;
