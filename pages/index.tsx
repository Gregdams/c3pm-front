import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { useContext, useEffect } from 'react';

import BigSearch from '../components/BigSearch';
import Layout from '../components/Layout';
import ModuleList from '../components/ModuleList';
import { PATHS } from '../constants/Paths';
import globalValue, { GlobalContextProvider } from '../contexts/Global';
import withApolloClient from '../hoc/withApollo';
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

/*
  Apollo - gql query example
 */
const GET_ALL_USERS = gql`
    query allPosts($first: Int!, $skip: Int!) {
    allPosts(orderBy: createdAt_DESC, first: $first, skip: $skip) {
      id
      title
      votes
      url
      createdAt
    }
    _allPostsMeta {
      count
    }
  }
    `;

const Modules = (): JSX.Element => {
  const global = useContext(globalValue);
  const { loading, error, data } = useQuery(GET_ALL_USERS,
    {
      variables: {
        skip: 0,
        first: 10,
      },
    });

  useEffect((): void => global.setActivePath(PATHS.MODULES));

  if (error) {
    console.error('gql error');
  } else if (loading) {
    console.log('gql loading...');
  } else {
    console.log(data);
  }

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

export default withApolloClient(Index);
