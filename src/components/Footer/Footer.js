import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__info">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__content">
        <p className="footer__copy">&copy; 2023</p>
        <ul className="footer__links">
          <li>
            <a
              href="https://practicum.yandex.ru"
              target="_blank"
              className="footer__link"
              rel="noreferrer"
            >
              Яндекс.Практикум
            </a>
          </li>
          <li>
            <a
              href="https://github.com"
              target="_blank"
              className="footer__link" rel="noreferrer"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
