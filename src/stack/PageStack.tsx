import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TransitionGroup } from 'react-transition-group';
import { PageStackContext } from '.';

import Page from './Page';

type moveTypes = 'next' | 'back';

const PageStack: FC<any> = ({ AppRoute }) => {
  const [componentStack, setComponentStack] = useState<any[]>([]);
  const [moveType, setMoveType] = useState<moveTypes>('next');
  const [currentPage, setCurrentPage] = useState<number>(0);

  const navigate = useNavigate();

  const getPage = (location: string) => {
    return AppRoute(location);
  };

  const onExited = () => {
    setComponentStack(componentStack.slice(0, -1));
  };

  const moveNextPage = (location: string) => {
    navigate(location);
    setMoveType('next');
    setCurrentPage((page) => page + 1);

    setComponentStack((prev) => [...prev, getPage(location)]);
  };

  const moveBeforePage = () => {
    if (componentStack.length > 1) {
      navigate(-1);
      setMoveType('back');
      setCurrentPage((page) => page - 1);
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
        {componentStack.map((comp, idx) => {
          return (
            <Page
              key={`${idx + 1}`}
              pageNum={idx + 1}
              currentPage={currentPage}
              onExited={onExited}
            >
              {comp}
            </Page>
          );
        })}
      </PageStackContext.Provider>
    </TransitionGroup>
  );
};

export default PageStack;
