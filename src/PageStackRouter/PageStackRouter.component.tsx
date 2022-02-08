/* eslint-disable @typescript-eslint/no-unused-vars */
import { CSSProperties, FC, ReactNode, useEffect, useState } from 'react';
import './Page.css';
import { MemoPage, Page } from './Page.style';
import { PageStackRouterContext } from './PageStackRouter.context';

const LeavingPageStyle = {
  transform: 'translateX(-50%)',
};

const EnteringPageStyle: CSSProperties = {
  animationName: 'entering',
  animationDuration: '0.5s',
};

const RecallingPageStyle: CSSProperties = {
  animationName: 'recalling',
  animationDuration: '0.5s',
};

type CurrentActionType = 'push' | 'pop' | 'replace';

const PageStackRouter: FC<{ children?: ReactNode }> = ({ children }) => {
  const [pageStack, setPageStack] = useState<FC[]>([]);
  const [currentAction, setCurrentAction] = useState<CurrentActionType>('push');
  const push = (page: FC) => {
    setPageStack((pageStack) => [...pageStack, page]);
    setCurrentAction('push');
  };
  const pop = () => {
    setPageStack((pageStack) => pageStack.slice(0, -1));
    setCurrentAction('pop');
  };
  const replace = (page: FC) => {
    setPageStack((pageStack) => pageStack.splice(-1, 1, page));
    setCurrentAction('replace');
  };

  useEffect(() => {
    setPageStack([() => <>{children}</>]);
  }, [children]);
  return (
    <PageStackRouterContext.Provider
      value={{
        push,
        pop,
        replace,
      }}
    >
      {pageStack.map((PageToBeRendered, index) => {
        if (index === pageStack.length - 1) {
          const lastPageStyle =
            currentAction === 'push' ? EnteringPageStyle : RecallingPageStyle;
          return (
            <Page key={index} style={lastPageStyle}>
              <PageToBeRendered />
            </Page>
          );
        }

        return (
          <Page key={index} style={LeavingPageStyle}>
            <PageToBeRendered />
          </Page>
        );
      })}
    </PageStackRouterContext.Provider>
  );
};

export { PageStackRouter };
