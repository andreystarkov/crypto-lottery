import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { InMemoryCache } from 'apollo-cache-inmemory'

const HASURA_ACCESS_KEY = 'bWUMJ68zcbHjrdQVMC8z'
const HASURA_ENDPOINT = 'https://stat.dao.casino/v1alpha1/graphql'

export function createApolloClient (uri = HASURA_ENDPOINT) {
  const httpLink = createHttpLink({ uri, credentials: 'include' })

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        'X-Hasura-Access-Key': HASURA_ACCESS_KEY
      }
    }
  })

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache({
      addTypename: false
    })
  })

  return client
}
