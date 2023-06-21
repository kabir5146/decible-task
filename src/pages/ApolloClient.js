import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from 'apollo-link-context';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';

export function createApolloClient() {
  const httpLink = createHttpLink({
    uri: 'https://frontend-test-api.aircall.io/graphql',
  });

  const authLink = setContext((_, { headers }) => {
    // Get the access token from localStorage
    const accessToken =`Bearer ${localStorage.getItem('accessToken')}` ;
    console.log("🚀 ~ file: ApolloClient.js:31 ~ authLink ~ accessToken:", accessToken)

    // Return the headers object with the access token added
    return {
      headers: {
        ...headers,
        Authorization: accessToken
      },
    };
  });

  const errorLink = onError(({ graphQLErrors }) => {
    if (graphQLErrors) {
      // Handle GraphQL errors if needed
    }
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, authLink, httpLink]),
    cache: new InMemoryCache(),
  });

  return client;
}

