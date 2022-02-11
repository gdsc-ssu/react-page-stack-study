import React, { FC, ReactNode } from 'react';
import { CSSTransition } from 'react-transition-group';

const Page: FC<{ pageNum: number; children: ReactNode }> = ({
  pageNum,
  children,
}) => {
  return (
    <CSSTransition
      classNames="slide"
      timeout={500}
      key={pageNum}
      in={true}
      unmountOnExit
    >
      <div className="page" id={`${pageNum}`}>
        {children}
      </div>
    </CSSTransition>
  );
};

export default Page;
