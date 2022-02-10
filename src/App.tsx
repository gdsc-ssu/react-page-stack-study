import React from 'react';
import {Route,Link, Switch} from "react-router-dom"
import {TransitionGroup, CSSTransition} from "react-transition-group"
import BottomNav from './component/BottomNav';
import LayOut from './component/LayOut';


const App = () => {
  return (
    <TransitionGroup>
      <LayOut></LayOut>
      <footer>
      <BottomNav></BottomNav>
      </footer>
    </TransitionGroup>
  );
}

export default App;
