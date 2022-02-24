import React, { FC, ReactNode } from 'react';
import { CSSTransition } from 'react-transition-group';

interface PropsType {
  children: ReactNode;
  pageNum: number;
  currentPage: number;
  onExited: () => void;
}

const Page: FC<PropsType> = ({ children, pageNum, currentPage, onExited }) => {
  return (
    <CSSTransition
      classNames="slide"
      timeout={500}
      key={pageNum}
      in={pageNum <= currentPage}
      onExited={onExited}
      unmountOnExit
    >
      <div
        className={`page ${pageNum === currentPage ? 'root' : 'notRoot'}`}
        id={`${pageNum}`}
      >
        {children}
      </div>
    </CSSTransition>
  );
};

export default Page;
