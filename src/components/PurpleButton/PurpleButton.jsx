import React from 'react';
import s from './PurpleButton.module.css';

const PurpleButton = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className={s.purple_button}>
        {text}
    </button>
  );
};

export default PurpleButton;