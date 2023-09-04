import React from 'react';

const FormInput = ({
  title,
  type,
  err,
  placeholder,
  minLength,
  maxLength,
  autoComplete,
}) => {
  return (
    <label className="form__text-field">
      {title}
      <input
        className="form__input"
        type={type}
        placeholder={placeholder}
        minLength={minLength}
        maxLength={maxLength}
        autoComplete={autoComplete}
        required
      ></input>
      <span className="form__error">{err}</span>
    </label>
  );
};

export default FormInput;
