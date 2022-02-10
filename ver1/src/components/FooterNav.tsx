import React, { ReactNode, useCallback } from 'react';
import { useParams } from 'react-router-dom';
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
  const { id } = useParams();

  const onMoveNext = () => {
    if (id !== path.slice(1)) moveNext(path);
  };

  return (
    <button className="linkItem" onClick={onMoveNext}>
      {children}
    </button>
  );
};

export default Navigation;
