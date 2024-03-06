import s from './TopMenu.module.css';
import React from 'react';
import { Link } from 'react-router-dom';

import topLogo from "../../assets/Vocation.png"


const TopMenu = () => {
  return (
    <div className={s.top_menu}>
      <img src={topLogo} className={s.logo} alt="logo" />

      <ul className={s.ulist}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/questionnaire">Questionnaire</Link>
        </li>
        <li>
          <Link to="/#about">About</Link>
        </li>
        
      </ul>
    </div>
  );
};

export default TopMenu;
