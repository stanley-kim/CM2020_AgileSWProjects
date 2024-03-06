import React from 'react';
import s from './App.module.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import TopMenu from './components/TopMenu/TopMenu';
import Home from './components/Home/Home';
import Questionnaire from './components/Questionnaire/Questionnaire';


function App() {
  return (
    <div className={s.App}>
      <Router>
        <TopMenu />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/questionnaire" element={<Questionnaire />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
