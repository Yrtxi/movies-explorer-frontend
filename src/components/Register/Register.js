import React from 'react';
import logo from '../../images/logo.svg';
import FormInput from '../UI/FormInput/FormInput';
import FormSubmitBtn from '../UI/FormSubmitBtn/FormSubmitBtn';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <section className="register">
      <div className="register__header">
        <Link to='/'>
          <img src={logo} alt="лого" className="register__logo" />
        </Link>
        <h2 className="register__title">Добро пожаловать!</h2>
      </div>
      <form className="form">
        <FormInput title='имя' type='text' />
        <FormInput title='E-mail' type='email' />
        <FormInput title='Пароль' type='password' err='Что-то пошло не так...' />
        <FormSubmitBtn btnText='Зарегистрироваться' />
      </form>
      <p className="register__subtitle">
        Уже зарегистрированы?
        <Link to='/signin' className="register__link" href="/#">
          {' '}
          Войти
        </Link>
      </p>
    </section>
  );
};

export default Register;
