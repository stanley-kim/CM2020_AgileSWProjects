import React, { useEffect, useState } from 'react';
import s from './App.module.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import TopMenu from './components/TopMenu/TopMenu';
import Home from './components/Home/Home';
import Questionnaire from './components/Questionnaire/Questionnaire';
import questionnaire from './data/questionnaire.json';
import Footer from './components/Footer/Footer';


function App() {
  let [questions, setQuestions] = useState([])

  useEffect(() => {
    setQuestions(questionnaire)
  }, [])

  return (
    <div className={s.App}>
      <Router>
        <TopMenu />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/questionnaire" element={<Questionnaire questions={questions} />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
