import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <LinkItem path="/">
        <i className="fas fa-home"></i>
      </LinkItem>
      <LinkItem path="/Google">
        <i className="fab fa-google"></i>
      </LinkItem>
      <LinkItem path="/Facebook">
        <i className="fab fa-facebook-f"></i>
      </LinkItem>
      <LinkItem path="/Apple">
        <i className="fab fa-apple"></i>
      </LinkItem>
    </nav>
  );
};

const LinkItem = ({ path, children }) => {
  const activeStyle = {
    color: 'black',
  };

  return (
    <NavLink
      to={path}
      style={({ isActive }) => {
        isActive ? activeStyle : null;
      }}
    >
      {children}
    </NavLink>
  );
};

export default Navigation;
