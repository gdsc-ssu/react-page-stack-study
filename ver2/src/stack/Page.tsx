import React, { FC, ReactNode } from 'react';
import { CSSTransition } from 'react-transition-group';

const Page: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    // <CSSTransition classNames="slide">
    <div className="stackItem">{children}</div>
    // </CSSTransition>
  );
};

export default Page;
