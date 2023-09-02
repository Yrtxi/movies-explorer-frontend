import React from "react";
import logo from '../../images/logo.svg';
import FormInput from '../UI/FormInput/FormInput';
import FormSubmitBtn from '../UI/FormSubmitBtn/FormSubmitBtn';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <section className="login">
      <div className="login__header">
        <Link to='/'>
          <img src={logo} alt="лого" className="login__logo" />
        </Link>
        <h2 className="login__title">Рады видеть!</h2>
      </div>
      <form className="form">
        <FormInput title='E-mail' type='email' />
        <FormInput title='Пароль' type='password' err='Что-то пошло не так...' />
        <FormSubmitBtn btnText='Войти' />
      </form>
      <p className="login__subtitle">
        Еще не зарегистрированы?
        <Link to='/signup' className="login__link" href="/#">
          {' '}
          Регистрация
        </Link>
      </p>
    </section>
  )
}

export default Login