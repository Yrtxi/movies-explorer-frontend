import React from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <section className="profile">
      <h2 className="profile__title">Привет, Виталий!</h2>
      <form className="profile__form">
        <label className="profile__form-field">
          Имя
          <input className="profile__input"></input>
        </label>
        <label className="profile__form-field">
          E&#8209;mail
          <input className="profile__input"></input>
        </label>
        <button type="submit" className="profile__sumbit-btn">
          Редактировать
        </button>
      </form>
      <Link to="/">
        <button type="button" className="profile__logout">
          Выйти из аккаунта
        </button>
      </Link>
    </section>
  );
};

export default Profile;
