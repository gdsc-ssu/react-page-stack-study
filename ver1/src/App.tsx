import React, { useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

// import ContextRoute from './globalState/ContextRoute';
import { NavContext } from './globalState/NavContext';
import Layout from './Layout';
import Contents from './routes/Contents';
import Home from './routes/Home';
import NotFound from './routes/NotFound';

type moveTypes = 'next' | 'back';

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [moveType, setMoveType] = useState<moveTypes>('next');

  const moveNext = (path: string) => {
    navigate(path);
    setMoveType('next');
  };

  const moveBack = () => {
    navigate(-1);
    setMoveType('back');
  };

  return (
    <TransitionGroup className={moveType}>
      <CSSTransition
        classNames="slide"
        timeout={500}
        key={location.key}
        unmountOnExit
      >
        <NavContext.Provider
          value={{
            moveNext,
            moveBack,
          }}
        >
          <Routes location={location}>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/:id" element={<Contents />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </NavContext.Provider>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default App;
