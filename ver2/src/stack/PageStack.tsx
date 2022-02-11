import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TransitionGroup } from 'react-transition-group';
import { PageStackContext } from '.';

import Page from './Page';

type moveTypes = 'next' | 'back';

const PageStack: FC<any> = ({ AppRoute }) => {
  const [componentStack, setComponentStack] = useState<any[]>([]);
  const [moveType, setMoveType] = useState<moveTypes>('next');

  const navigate = useNavigate();

  const getPage = (location: string) => {
    const pageNum = componentStack.length;
    return (
      <Page pageNum={pageNum} key={`${pageNum}`}>
        {AppRoute(location)}
      </Page>
    );
  };

  const moveNextPage = (location: string) => {
    navigate(location);

    setComponentStack((prev) => [...prev, getPage(location)]);
    setMoveType('next');
  };

  const moveBeforePage = () => {
    if (componentStack.length > 1) {
      navigate(-1);

      setComponentStack(componentStack.slice(0, -1));
      setMoveType('back');
    }
  };

  useEffect(() => {
    moveNextPage('/');
  }, []);

  return (
    <TransitionGroup className={moveType}>
      <PageStackContext.Provider
        value={{
          moveNextPage,
          moveBeforePage,
        }}
      >
        {componentStack}
      </PageStackContext.Provider>
    </TransitionGroup>
  );
};

export default PageStack;
