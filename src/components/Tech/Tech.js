import React from 'react';
import SectionTitle from '../UI/SectionTitle/SectionTitle';

const Tech = () => {
  return (
    <section className="tech">
        <SectionTitle title="Технологии" />
        <h2 className="tech__title">7 технологий</h2>
        <p className="tech__subtitle">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <ul className="tech__table">
          <li>
            <p className="tech__table-item">HTML</p>
          </li>
          <li>
            <p className="tech__table-item">CSS</p>
          </li>
          <li>
            <p className="tech__table-item">JS</p>
          </li>
          <li>
            <p className="tech__table-item">React</p>
          </li>
          <li>
            <p className="tech__table-item">Git</p>
          </li>
          <li>
            <p className="tech__table-item">Express.js</p>
          </li>
          <li>
            <p className="tech__table-item">mongoDB</p>
          </li>
        </ul>
    </section>
  );
};

export default Tech;
