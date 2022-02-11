import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import {useTransition, animated} from 'react-spring'
import Main from './components/Main';
import Profile from './components/Profile';
import './App.css';


function App() {
  const location = useLocation()
  const transitions = useTransition(location, {
    from: { transform: 'translate3d(100%,0,0)' },
    enter: {  transform: 'translate3d(0%,0,0)' },
    leave: { transform: 'translate3d(-50%,0,0)' },
  })
  return (  
    <>
      {transitions((props,item)=>{
          return <animated.div style={props}>
              <Routes location={item}>
                <Route path="/" element={<Main />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>
          </animated.div>
      })}
    </>
  )
}

export default App;
