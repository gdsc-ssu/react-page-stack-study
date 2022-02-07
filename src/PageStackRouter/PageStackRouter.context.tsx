import { createContext, FC, useContext } from 'react';

const PageStackRouterContext = createContext<{
  push: (page: FC) => void;
  pop: () => void;
}>({ push: () => {}, pop: () => {} });

const usePageStackRouter = () => useContext(PageStackRouterContext);

export { PageStackRouterContext, usePageStackRouter };
