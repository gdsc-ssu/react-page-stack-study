import { FC, ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { PageStackContext } from '.';

import Page from './Page';

const PageStack: FC<any> = ({ AppRoute }) => {
  const [componentStack, setComponentStack] = useState<any[]>([]);
  const [locationStack, setLocationStack] = useState<string[]>([]);

  const navigate = useNavigate();

  const getPage = (location: string) => {
    return <Page>{AppRoute(location)}</Page>;
  };

  const moveNextPage = (location: string) => {
    navigate(location);

    setComponentStack((prev) => [...prev, getPage(location)]);
    setLocationStack((prev) => [...prev, location]);
  };

  const moveBeforePage = () => {
    if (componentStack.length > 1 && locationStack.length > 1) {
      const poppedLocationStack = [...locationStack];
      const beforeLocation = poppedLocationStack.pop()!;

      navigate(beforeLocation);

      setComponentStack(componentStack.slice(0, -1));
      setLocationStack(poppedLocationStack);
    }
  };

  useEffect(() => {
    moveNextPage('/');
  }, []);

  return (
    // <TransitionGroup component={null}>
    <PageStackContext.Provider
      value={{
        moveNextPage,
        moveBeforePage,
      }}
    >
      {componentStack}
    </PageStackContext.Provider>
    // </TransitionGroup>
  );
};

export default PageStack;
