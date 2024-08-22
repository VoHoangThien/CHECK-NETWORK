import {ApolloClient, createHttpLink, InMemoryCache} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import {onError} from '@apollo/client/link/error';

const Client = () => {
  let _client;

  const getApolloClient = async () => {
    if (_client) {
      return _client;
    }

    const cache = new InMemoryCache({});

    const httpLink = createHttpLink({
      uri: `https://nova-be.9ten.online/graphql`,
    });

    const authLink = setContext(async (_, {headers}) => {
      return {
        headers: {
          ...headers,
          store: 'nova_ksa_ar',
          createEmptyCart: 'create_cart_id',
        },
      };
    });

    const errorLink = onError(
      ({graphQLErrors, networkError, operation, forward}) => {
        if (graphQLErrors) {
          for (let err of graphQLErrors) {
            switch (err.message) {
              case `The current customer isn't authorized.`:
              case `the session is ended`:
              case `The current user cannot perform operations on cart`:
              case `The current user cannot perform operations on wishlist`:
            }
          }
        }
      },
    );

    const client = new ApolloClient({
      link: authLink.concat(errorLink).concat(httpLink),
      cache,
    });

    _client = client;

    return client;
  };

  return {
    getApolloClient,
  };
};

export default Client;
