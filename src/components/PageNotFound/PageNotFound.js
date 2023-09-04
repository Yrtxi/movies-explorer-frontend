import React from 'react';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <main className="main">
      <section className="err">
        <h2 className="err__number">404</h2>
        <p className="err__title">Страница не найдена</p>
        <button onClick={() => navigate(-1)} className="err__link">
          Назад
        </button>
      </section>
    </main>
  );
};

export default PageNotFound;
