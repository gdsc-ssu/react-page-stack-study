import React, { ReactNode } from 'react';
import { useNavContext } from '../globalState/NavContext';

interface LinkItemType {
  path: string;
  children: ReactNode;
}

const Navigation = () => {
  const items = [
    { path: '/', icon: 'fas fa-home' },
    { path: '/Google', icon: 'fab fa-google' },
    { path: '/Facebook', icon: 'fab fa-facebook-f' },
    { path: '/Apple', icon: 'fab fa-apple' },
  ];

  return (
    <nav>
      {items.map((item) => (
        <LinkItem path={item.path} key={item.path}>
          <i className={item.icon}></i>
        </LinkItem>
      ))}
    </nav>
  );
};

const LinkItem = ({ path, children }: LinkItemType) => {
  const { moveNext } = useNavContext();

  return (
    <button className="linkItem" onClick={() => moveNext(path)}>
      {children}
    </button>
  );
};

export default Navigation;
