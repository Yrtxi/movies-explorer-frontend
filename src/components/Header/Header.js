import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

const Header = ({ openMenu }) => {

  //Роуты для проверки верстки

  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="лого" className="header__logo" />
      </Link>

      <ul className="header__menu">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <li>
                  <Link to="/signup" className="header__link">
                    Регистрация
                  </Link>
                </li>
                <li>
                  <Link to='/signin'>
                    <button type='button' className="header__btn">
                      Войти
                    </button>
                  </Link>
                </li>
              </>
            }
          ></Route>
          <Route
            path="*"
            element={
              <>
                <ul className="header__films">
                  <li>
                    <Link to='/movies' className="header__film">
                      Фильмы
                    </Link>
                  </li>
                  <li>
                    <Link to='/saved-movies' className="header__film">
                      Сохраненные фильмы
                    </Link>
                  </li>
                </ul>
                <li>
                  <Link to='/profile'>
                    <button type='button' className="header__btn-acc">
                      Аккаунт
                    </button>
                  </Link>
                </li>
                <li>
                  <button onClick={openMenu} className="header__burger"></button>
                </li>
              </>
            }
          ></Route>
        </Routes>
      </ul>
    </header>
  );
};

export default Header;
