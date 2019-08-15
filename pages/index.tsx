import { useEffect, useContext } from 'react';

import BigSearch from '../components/BigSearch';
import Layout from '../components/Layout';
import ModuleList from '../components/ModuleList';
import { PATHS } from '../constants/Paths';
import globalValue, { GlobalContextProvider } from '../contexts/Global';
import { Module } from '../types/Module';

const exampleModule = {
  name: 'Hana',
  author: 'The Boost Team',
  description: 'Hana is your standard metaprogramming library for C++. Still, use at your own risk. And be carefull when crossing the road.',
};

const exampleModules: Module[] = [
  { ...exampleModule, id: 1 },
  { ...exampleModule, id: 2 },
  { ...exampleModule, id: 3 },
  { ...exampleModule, id: 4 },
];

/* eslint-disable no-console */
const handleSearch = (s: string): void => console.log(s);

const Modules = (): JSX.Element => {
  const global = useContext(globalValue);

  useEffect((): void => global.setActivePath(PATHS.MODULES));

  return (
    <Layout>
      <BigSearch onSearch={handleSearch} />
      <div className="pb3" />

      <p className="h3 m0 mt1 mb3">4 matching modules</p>
      <ModuleList modules={exampleModules} />
    </Layout>
  );
};

const Index = (): JSX.Element => (
  <GlobalContextProvider>
    <Modules />
  </GlobalContextProvider>
);

export default Index;
