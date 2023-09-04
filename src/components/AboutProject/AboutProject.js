import React from 'react';
import SectionTitle from '../UI/SectionTitle/SectionTitle';

const AboutProject = () => {
  return (
    <section className="about-project">
      <SectionTitle title='О проекте'/>
      <ul className="about-project__table">
        <li>
          <h2 className="about-project__table-heading">
            Дипломный проект включал 5 этапов
          </h2>
          <p className="about-project__table-text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </li>
        <li>
          <h2 className="about-project__table-heading">
            На выполнение диплома ушло 5 недель
          </h2>
          <p className="about-project__table-text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <ul className="about-project__progress">
        <li>
          <h2 className="about-project__progress-heading about-project__progress-heading_green">
            1 неделя
          </h2>
          <p className="about-project__progress-text">Back-end</p>
        </li>
        <li>
          <h2 className="about-project__progress-heading about-project__progress-heading_grey">
            4 недели
          </h2>
          <p className="about-project__progress-text">Front-end</p>
        </li>
      </ul>
    </section>
  );
};

export default AboutProject;
