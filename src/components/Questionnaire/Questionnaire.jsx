import {useState} from 'react';

import s from './Questionnaire.module.css';
import PurpleButton from '../PurpleButton/PurpleButton';

const Questionnaire = ({ questions }) => {

    const [selectedOption, setSelectedOption] = useState(null);//for radio inputs of on-choice question
    const [answers, setAnswers] = useState({});//checked answers to the state


    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };


  const handleAnswerSelect = (question, answer) => {
    console.log(question)
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [question]: answer,
    }));

    console.log(answers)
  };
    
    return (
        <div className={s.container}>
            <svg className={s.about_circle} width="568" height="1093" viewBox="0 0 568 1093" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f_2022_110)">
                    <circle cx="600.5" cy="492.5" r="292.5" fill="#5E5BFF" fill-opacity="0.39"/>
                </g>
                <defs>
                    <filter id="filter0_f_2022_110" x="0" y="-108" width="1201" height="1201" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="154" result="effect1_foregroundBlur_2022_110"/>
                    </filter>
                </defs>
            </svg>

            <div className={s.skills}></div>
            {
                questions.map(el => {
                    const {section, questions} = el;
                    return (
                        <div className={s.section}>
                            <h1>
                                {section}
                                <svg className={s.about_circle} width="568" height="1093" viewBox="0 0 568 1093" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_f_2022_110)">
                                        <circle cx="600.5" cy="492.5" r="292.5" fill="#5E5BFF" fill-opacity="0.39"/>
                                    </g>
                                    <defs>
                                        <filter id="filter0_f_2022_110" x="0" y="-108" width="1201" height="1201" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                        <feGaussianBlur stdDeviation="154" result="effect1_foregroundBlur_2022_110"/>
                                        </filter>
                                    </defs>
                                </svg>
                                <svg className={s.home_circle} width="568" height="1093" viewBox="0 0 568 1093" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_f_2040_2109)">
                                <circle cx="600.5" cy="492.5" r="292.5" fill="#7775FF" fillOpacity="0.39"/>
                                </g>
                                <defs>
                                    <filter id="filter0_f_2040_2109" x="0" y="-108" width="1201" height="1201" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                    <feGaussianBlur stdDeviation="154" result="effect1_foregroundBlur_2040_2109"/>
                                    </filter>
                                </defs>
                            </svg>
                            </h1>
                            {questions.map ((e, i) => {
                                
                                const {question, options} = e;
                                return (
                                    <div className={s.question_section}>
                                        <h2 className={s.question_heading} >Question {i+1} </h2>
                                        <div> {question} </div>
                                        <ul>
                                            {options.map((option) => {
                                                return (
                                                    <label className={s.option_label} key={question+option}>
                                                        <input
                                                            type="radio"
                                                            value={option}
                                                            checked={selectedOption === option}
                                                            onChange={() => {
                                                                handleOptionSelect(option)
                                                                handleAnswerSelect(question, option)
                                                            }}
                                                        />
                                                        <li className={s.option_text}>{option}</li><br />
                                                    </label> 
                                                )
                                            })}
                                        </ul>
                                    </div>
                                )
                                
                            })}
                        </div>
                    )
                })
            }

            <PurpleButton text="SUBMIT" onClick={() => console.log(answers)} />
        </div>
    )
};

export default Questionnaire;