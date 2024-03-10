import s from './TopMenu.module.css';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import topLogo from "../../assets/Vocation.png"


const TopMenu = () => {
  const navigate = useNavigate()
  return (
    <div className={s.top_menu}>
      <img src={topLogo} className={s.logo} alt="logo" onClick={() => navigate('/') }/>

      <ul className={s.ulist}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/questionnaire">Questionnaire</Link>
        </li>
        <li>
          <Link to="/" onClick={() => document.getElementById('about')?.scrollIntoView()}>About</Link>
        </li>
        
      </ul>
    </div>
  );
};

export default TopMenu;
