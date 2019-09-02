import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient, InMemoryCache, HttpLink, NormalizedCacheObject } from 'apollo-boost';
import fetch from 'isomorphic-unfetch';
import { AppContext } from 'next/app';
import Head from 'next/head';
import React from 'react';

const GRAPHQL_URI: string = process.env.API_BASE_URL || '';
let apolloClient: ApolloClient<NormalizedCacheObject> | null = null;

const createApolloClient = (initialState = {}): ApolloClient<NormalizedCacheObject> => {
  const isBrowser = typeof window !== 'undefined';
  return new ApolloClient({
    connectToDevTools: isBrowser,
    ssrMode: !isBrowser,
    link: new HttpLink({
      uri: GRAPHQL_URI,
      credentials: 'same-origin',
      fetch: isBrowser ? undefined : fetch,
    }),
    cache: new InMemoryCache().restore(initialState),
  });
};

const initApolloClient = (initialState = {}): ApolloClient<NormalizedCacheObject> => {
  const isBrowser = typeof window !== 'undefined';

  if (isBrowser) {
    return createApolloClient(initialState);
  }

  if (!apolloClient) {
    apolloClient = createApolloClient(initialState);
  }

  return apolloClient;
};

interface Props
{
  apolloClient: ApolloClient<NormalizedCacheObject>;
  apolloState: NormalizedCacheObject;
  pageProps: React.ReactNode;
}

interface ApolloProps {
  apolloState?: NormalizedCacheObject;
  apolloClient: ApolloClient<NormalizedCacheObject>;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const withApollo = (PageComponent: any,
  { ssr = true } = {}): React.Component => {
  // eslint-disable-next-line no-shadow,react/prop-types
  const WithApollo = ({ apolloClient, apolloState, ...pageProps }: Props): JSX.Element => {
    const client = React.useMemo(
      (): ApolloClient<NormalizedCacheObject> => apolloClient || initApolloClient(apolloState),
      [],
    );
    return (
      <ApolloProvider client={client}>
        <PageComponent {...pageProps} />
      </ApolloProvider>
    );
  };

  if (typeof window === 'undefined') {
    if (ssr) {
      WithApollo.getInitialProps = async (ctx: AppContext):
      Promise<{apolloState: NormalizedCacheObject}> => {
        const { AppTree } = ctx;

        let pageProps = {};
        if (PageComponent.getInitialProps) {
          pageProps = await PageComponent.getInitialProps(ctx);
        }

        // eslint-disable-next-line no-shadow
        const apolloClient = initApolloClient(undefined);

        try {
          // eslint-disable-next-line global-require
          await require('@apollo/react-ssr').getDataFromTree(
            <AppTree
              pageProps={{
                ...pageProps,
                apolloClient,
              }}
            />,
          );
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error('Error while running `getDataFromTree`', error);
        }

        Head.rewind();

        const apolloState = apolloClient.cache.extract();

        return {
          ...pageProps,
          apolloState,
        };
      };
    }
  }

  return WithApollo;
};

export default withApollo;
