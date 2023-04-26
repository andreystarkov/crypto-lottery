import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { InMemoryCache } from 'apollo-cache-inmemory'

import { getOpenKey } from 'Utils/Selectors'

import { MUTATION_TODO_ADD, MUTATION_LOTTERY_TICKETS_ADD,
  MUTATION_LOTTERY_WINNERS_ADD, MUTATION_PAST_DRAWS_ADD,
  MUTATION_USER_TICKETS_ADD } from 'Apollo/Mutations'

import gql from 'graphql-tag'

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

const client = createApolloClient()

const lottery_tickets = gql`
  mutation insert_lottery_tickets {
    insert_lottery_tickets (
      objects: [
        {
          timestamp: "333",
          openkey: "0x111",
          numbers: "1,2"
        }
      ]
    ) {
      returning {
        id,
        ticketId
      }
    }
  }
`

let timestamp = new Date().getTime()
log('TIMESTAMP', timestamp)

export const objectsLotteryTickets = [
  {
    ticketId: 1,
    timestamp: timestamp.toString(),
    openkey: '0x1111111111',
    numbers: '1,2,3,4,5'
  }
]

export const objectsLotteryWinners = [
  {
    reward: 10,
    openkey: '0x1111111111',
    timestamp: timestamp.toString(),
    drawId: 1,
    countWinTickets: 1
  }
]

export const objectsPastDraws = [
  {
    drawId: 1,
    jackpot: 10,
    timestamp: timestamp.toString(),
    winNumbers: '1,2,3,4,5,6',
    ticketsSold: 1,
    winnersCount: 1
  }
]

export const objectsUserTickets = [
  {
    ticketId: 1,
    drawId: 1,
    numbers: '1,2,3,4,5,6',
    openkey: '0x1111111111',
    multidraw: false
  }
]

export function insertLotteryTickets () {
  // const openKey = yield select(getOpenKey)
  // log(openKey)

  log('1')
  client.mutate({
    mutation: MUTATION_LOTTERY_TICKETS_ADD,
    variables: {
      objectsLotteryTickets
    }
  }).then(e => log({ e }))
}

export function insertLotteryWinners () {
  // const openKey = yield select(getOpenKey)
  // console.log(openKey)

  log('2')
  client.mutate({
    mutation: MUTATION_LOTTERY_WINNERS_ADD,
    variables: {
      objectsLotteryWinners
    }
  }).then(e => log({ e }))
}

export function insertPastDraws () {
  // const openKey = yield select(getOpenKey)
  // log(openKey)

  log('3')
  client.mutate({
    mutation: MUTATION_PAST_DRAWS_ADD,
    variables: {
      objectsPastDraws
    }
  }).then(e => log({ e }))
}

export function insertUserTickets () {
  // const openKey = yield select(getOpenKey)
  // log(openKey)

  log('4')
  client.mutate({
    mutation: MUTATION_USER_TICKETS_ADD,
    variables: {
      objectsUserTickets
    }
  }).then(e => log({ e }))
}
