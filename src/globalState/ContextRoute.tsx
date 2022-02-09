import React from 'react';
import { Route } from 'react-router-dom';

// Routes 안에서 Provider 사용 못해서 만들었는데, 사용 안함..ㅋ

interface ContextRouterProps {
  ContextComponent: any;
  values: any;
  path: string;
  element: any;
}

const ContextRoute = ({
  ContextComponent,
  values,
  path,
  element,
}: ContextRouterProps) => {
  const { Provider } = ContextComponent;
  const Component = element;
  return (
    <Route path={path}>
      <Provider value={values}>
        <Component />
      </Provider>
    </Route>
  );
};

export default ContextRoute;
