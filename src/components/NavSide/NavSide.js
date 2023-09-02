import React from 'react';
import { Link } from 'react-router-dom'

const NavSide = ({ isOpen, closeMenu }) => {
  return (
    <div className={`overlay ${isOpen ? 'overlay_opened' : ''
      }`}>
      <div className="navside">
        <ul className="navside__menu">
          <li>
            <Link to='/' onClick={closeMenu} className="navside__link">
              Главная
            </Link>
          </li>
          <li>
            <Link to='/movies' onClick={closeMenu} className="navside__link">
              Фильмы
            </Link>
          </li>
          <li>
            <Link to="/saved-movies" onClick={closeMenu} className="navside__link">
              Сохраненные фильмы
            </Link>
          </li>
        </ul>
        <Link to='/profile' onClick={closeMenu}>
          <button type='button' className="navside__btn">Аккаунт</button>
        </Link>
        <button onClick={closeMenu} type='button' className='navside__close-btn'></button>
      </div>
    </div>
  );
};

export default NavSide;
