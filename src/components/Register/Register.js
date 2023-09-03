import React from 'react';
import logo from '../../images/logo.svg';
import FormInput from '../UI/FormInput/FormInput';
import FormSubmitBtn from '../UI/FormSubmitBtn/FormSubmitBtn';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <main className="main">
      <section className="register">
        <div className="register__header">
          <Link to="/">
            <img src={logo} alt="лого" className="register__logo" />
          </Link>
          <h2 className="register__title">Добро пожаловать!</h2>
        </div>
        <form className="form">
          <div className='form__inputs'>
            <FormInput
              title="имя"
              type="text"
              placeholder="введите имя"
              minLength={2}
              maxLength={30}
            />
            <FormInput
              title="E-mail"
              type="email"
              placeholder="введите e-mail"
            />
            <FormInput
              title="Пароль"
              type="password"
              err="Что-то пошло не так..."
              placeholder="введите пароль"
              minLength={2}
              maxLength={30}
              autoComplete="on"
            />
          </div>
          <FormSubmitBtn btnText="Зарегистрироваться" />
        </form>
        <p className="register__subtitle">
          Уже зарегистрированы?
          <Link to="/signin" className="register__link" href="/#">
            {' '}
            Войти
          </Link>
        </p>
      </section>
    </main>
  );
};

export default Register;
