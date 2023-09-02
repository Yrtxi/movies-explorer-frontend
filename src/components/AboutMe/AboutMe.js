import React from 'react';
import SectionTitle from '../UI/SectionTitle/SectionTitle';
import foto from '../../images/aboutMe-myFoto.png';

const AboutMe = () => {
  return (
    <section className="about-me">
      <SectionTitle title="Студент" />
      <div className="about-me__content">
        <h2 className="about-me__name">Виталий</h2>
        <p className="about-me__job">Фронтенд-разработчик, 30 лет</p>
        <p className="about-me__bio">
          Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня
          есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом.
          Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
          После того, как прошёл курс по веб-разработке, начал заниматься
          фриланс-заказами и ушёл с постоянной работы.
        </p>
        <a
          className="about-me__link"
          href="https://github.com/Yrtxi?tab=repositories"
          target="_blank" rel="noreferrer"
        >
          Github
        </a>
        <img src={foto} alt="Моя фотография" className="about-me__foto" />
      </div>
    </section>
  );
};

export default AboutMe;
