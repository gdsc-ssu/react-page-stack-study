import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Main from './components/Main';
import Profile from './components/Profile';
import './App.css';

function App() {
  const location = useLocation()
  return (  
      <TransitionGroup component={null} className="transition-group">
      <CSSTransition key={location.key} classNames="right" timeout={300} >
        <Routes location={location}>
          <Route path="/" element={<Main />} />
          <Route path="/:id" element={<Profile />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>    
  )
}

export default App;
