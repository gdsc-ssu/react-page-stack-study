/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, ReactNode, useState } from 'react';
import { PageStackRouterContext } from './PageStackRouter.context';

const PageStackRouter: FC<{ children?: ReactNode }> = ({ children }) => {
  const [pageStack, setPageStack] = useState<FC[]>([]);
  const push = (page: FC) => setPageStack((pageStack) => [...pageStack, page]);
  const pop = () => setPageStack((pageStack) => pageStack.slice(0, -1));
  return (
    <PageStackRouterContext.Provider
      value={{
        push,
        pop,
      }}
    >
      {children}
      {pageStack.map((Page, index) => (
        <Page key={index} />
      ))}
    </PageStackRouterContext.Provider>
  );
};

export { PageStackRouter };
