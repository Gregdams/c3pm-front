import { createContext, useState } from 'react';

import { PATHS } from '../../constants/Paths';

export interface GlobalContextInterface {
  activePath: PATHS;
  setActivePath: (activePath: PATHS) => void;
}

const defaultValue = null as unknown as GlobalContextInterface;
const ctxt = createContext<GlobalContextInterface>(defaultValue);

interface Props {
  children: React.ReactNode;
}

const GlobalContextProviderImpl = ({ children }: Props): JSX.Element => {
  const [ activePath, setActivePath ] = useState(PATHS.UNKNOWN);

  return (
    <ctxt.Provider
      value={{
        activePath,
        setActivePath,
      }}
    >
      { children }
    </ctxt.Provider>
  );
};

export const GlobalContextProvider = GlobalContextProviderImpl;

export default ctxt;
