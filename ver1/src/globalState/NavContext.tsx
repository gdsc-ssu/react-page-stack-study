import { createContext, useContext } from 'react';

const NavContext = createContext<{
  moveNext: (path: string) => void;
  moveBack: () => void;
}>({ moveNext: () => {}, moveBack: () => {} });

const useNavContext = () => useContext(NavContext);

export { NavContext, useNavContext };
