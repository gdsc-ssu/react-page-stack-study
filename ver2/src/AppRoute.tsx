import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Contents from './routes/Contents';
import Home from './routes/Home';
import NotFound from './routes/NotFound';

const AppRoute = (location: string) => {
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

export default AppRoute;
