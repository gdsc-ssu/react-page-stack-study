import React from "react";
import { Router, Route, Link, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { createBrowserHistory } from "history";
import Main from "./component/Main";
import JunYeoung from "./component/Junyeong";
import Inkyu from "./component/Inkyu";
import SoNa from "./component/SoNa";
import KangHyn from "./component/KangHyn";
import NotFound from "./component/NotFound";
import "./App.scss";

const pageTrans = "trans";
const classNames = {
  appear: `${pageTrans} appear`,
  appearActive: `${pageTrans} appear active`,
  appearDone: `${pageTrans} appear done`,
  enter: `${pageTrans} enter`,
  enterActive: `${pageTrans} enter active`,
  enterDone: `${pageTrans} enter done`,
  exit: `${pageTrans} exit`,
  exitActive: `${pageTrans} exit active`,
  exitDone: `${pageTrans} exit done`,
};

const App = () => {
  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <Route
        render={({ location }) => (
          <TransitionGroup className="transitionGroup">
            <CSSTransition
              key={location.pathname}
              classNames={classNames}
              timeout={200}
            >
              <Switch location={location}>
                <Route path="/" exact component={Main} />
                <Route path="/junyeoung" component={JunYeoung} />
                <Route path="/inkyu" component={Inkyu} />
                <Route path="/sona" component={SoNa} />
                <Route path="/kanghyn" component={KangHyn} />
                <Route component={NotFound} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
      <BottomNav />
    </Router>
  );
};

const BottomNav = () => {
  return (
    <nav className="BottomNav">
      <Link to="/">main으로 가기</Link>
      <Link to="/junyeoung">준영으로 가기</Link>
      <Link to="/inkyu">인규로 가기</Link>
      <Link to="/sona">소나로 가기</Link>
      <Link to="/kanghyn">강현으로 가기</Link>
    </nav>
  );
};

export default App;
