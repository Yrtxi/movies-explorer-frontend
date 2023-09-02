import React from 'react';
import { Link } from 'react-scroll';

const NavTab = () => {
  return (
    <ul className="nav-tab">
      <li>
        <Link
          to="about-project"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <p className="nav-tab__item">О проекте</p>
        </Link>
      </li>
      <li>
        <Link to="tech" spy={true} smooth={true} offset={-70} duration={500}>
          <p className="nav-tab__item">Технологии</p>
        </Link>
      </li>
      <li>
        <Link
          to="about-me"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <p className="nav-tab__item">Студент</p>
        </Link>
      </li>
    </ul>
  );
};

export default NavTab;
