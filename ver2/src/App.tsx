import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './Layout';
import Contents from './routes/Contents';
import Home from './routes/Home';
import NotFound from './routes/NotFound';

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Contents />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
