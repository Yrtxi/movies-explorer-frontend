import React from 'react';
import link from '../../images/aboutMe-link.svg';

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__list">
        <li className="portfolio__point">
          <a
            href="https://github.com/Yrtxi/how-to-learn"
            target="_blank"
            rel="noreferrer"
            className="portfolio__item"
          >
            Статичный сайт
            <img
              className="portfolio__link"
              src={link}
              alt="Ссылка на проект"
            />
          </a>
        </li>
        <li className="portfolio__point">
          <a
            href="https://yrtxi.github.io/russian-travel"
            target="_blank"
            rel="noreferrer"
            className="portfolio__item"
          >
            Адаптивный сайт
            <img
              className="portfolio__link"
              src={link}
              alt="Ссылка на проект"
            />
          </a>
        </li>
        <li className="portfolio__point">
          <a
            href="https://yrtxi.github.io/mesto"
            target="_blank"
            rel="noreferrer"
            className="portfolio__item"
          >
            Одностраничное приложение
            <img
              className="portfolio__link"
              src={link}
              alt="Ссылка на проект"
            />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Portfolio;
