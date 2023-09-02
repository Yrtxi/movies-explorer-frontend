import React from 'react';

const FormInput = ({ title, type, err }) => {
  return (
    <label className="form__text-field">
      {title}
      <input className="form__input" type={type} required></input>
      <span className="form__error">{err}</span>
    </label>
  )
};

export default FormInput;
