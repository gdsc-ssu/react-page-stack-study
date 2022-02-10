import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Layout from './Layout';
import Contents from './routes/Contents';
import Home from './routes/Home';
import NotFound from './routes/NotFound';

const App = () => {
  const location = useLocation();

  return (
    <Routes location={location}>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Contents />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
