import React from 'react';
import { Outlet } from 'react-router-dom';
import FooterNav from './components/FooterNav';
import HeaderNav from './components/HeaderNav';

const Layout = () => {
  return (
    <div className="container">
      <header>
        <HeaderNav />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <FooterNav />
      </footer>
    </div>
  );
};

export default Layout;
