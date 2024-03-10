import {useState, useEffect} from 'react';
import BarChart from './Chart/BarChart';


import s from './Questionnaire.module.css';
import PurpleButton from '../PurpleButton/PurpleButton';
import categories from '../../data/categories.json';
import bools from '../../data/bools.json';
import professions from '../../data/professions.json'
import PieChart from './Chart/PieChart';

const Questionnaire = ({ questions }) => {
    const [selectedOption, setSelectedOption] = useState(null);//for radio inputs of on-choice question
    const [answers, setAnswers] = useState({});//checked answers to the state
    const [showResults, setShowResults] = useState(false);
    const [decisionTree, setDecisionTree] = useState([]);
    const [professionScores, setProfessionScores] = useState([]);

    useEffect(() => {
        for (let j = 0; j < professions.length; j++) {
            for (let i = 0; i < categories.length; i++) {
                if (bools[i][j] && !professions[j].answers.includes(categories[i])){
                    professions[j].answers.push(categories[i]);
                }
            }
        }
        setDecisionTree(professions)        
      }, []);

    const handleOptionSelect = (option, type) => {
        if (type === 'single') setSelectedOption(option);

        if (type === 'multi') {
            setSelectedOption((prevSelectedOptions) => {
              const optionsArray = prevSelectedOptions || []; // Ensure it's an array
          
              return optionsArray.includes(option)
                ? optionsArray.filter((selectedOption) => selectedOption !== option)
                : [...optionsArray, option];
            });
        }
    };


    const handleAnswerSelect = (question, answer, type) => {
        setAnswers((prevAnswers) => {
        // If the question is multiple-choice ('multi'), store answers as an array
            if (type === 'multi') {
                const currentAnswers = prevAnswers[question] || [];
        
                // Toggle the selected state for multiple-choice questions
                return {
                ...prevAnswers,
                [question]: currentAnswers.includes(answer)
                    ? currentAnswers.filter((selectedOption) => selectedOption !== answer)
                    : [...currentAnswers, answer],
                };
            } else {
                // For single-choice and other types, store answers directly
                return {
                ...prevAnswers,
                [question]: [answer],
                };
            }
        });
    };

    const handleSubmit = (answers) => {
        const flatAnsrs = Object.values(answers).flat(1);
        
        setProfessionScores (decisionTree.map(profession => {
            const score = profession.answers.filter(answer => flatAnsrs.includes(answer)).length;
            return { profession: profession.profession, score };
        }))

        setShowResults(true)
    }
    
    return (
        !showResults 
        ?   <div className={s.container}>
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
                                    const {type, question, options} = e;
                                    return (
                                        <div className={s.question_section}>
                                            <h2 className={s.question_heading} >Question {i+1} </h2>
                                            <div> {question} </div>
                                            <ul>
                                                {options.map((option) => {
                                                    return (
                                                        <label className={s.option_label} key={question+option}>
                                                            <input
                                                                type={
                                                                    type === 'multi' ? 'checkbox' : type === 'single' ? 'radio' : 'text'
                                                                }
                                                                // defaultValue={type === 'text' && option}
                                                                checked={
                                                                    type === 'multi'
                                                                        ? (selectedOption || []).includes(option)
                                                                        : selectedOption === option
                                                                }
                                                                onChange={() => {
                                                                    handleOptionSelect(option, type)
                                                                    handleAnswerSelect(question, option, type)
                                                                }}
                                                                placeholder={type === 'text' ? question : ''}
                                                                // style={type=== 'text' ? {height: '300px'} : {marginTop: 0}}
                                                            />
                                                            <li className={s.option_text}>{!type === 'text' ? '' : option}</li><br />
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
                <PurpleButton text="SUBMIT" onClick={() => handleSubmit(answers)} />
            </div>
        :   <div className={s.canvas_container}>
                <div>
                    <h1 className={s.pie_chart_heading}>Salary range for your professions, US$: </h1>
                    <BarChart professionScores={professionScores}/>
                </div>
                <div>
                    <h1 className={s.pie_chart_heading}>Best 5 professions that fit you: </h1>
                    <PieChart professionScores={professionScores}/>
                </div>
            </div>
    )
};

export default Questionnaire;