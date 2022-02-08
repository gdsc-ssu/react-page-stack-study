import React from 'react';
import { Outlet } from 'react-router-dom';
import FooterNav from './components/FooterNav';
import HeaderNav from './components/HeaderNav';

const Layout = () => {
  return (
    <>
      <header>
        <HeaderNav />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <FooterNav />
      </footer>
    </>
  );
};

export default Layout;
