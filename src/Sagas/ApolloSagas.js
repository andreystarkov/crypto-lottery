import { put, fork, call, all } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { log } from 'Utils/Log'
import gql from 'graphql-tag'

const ticketNumbers = { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, pp: false }

const testObject = {
  openkey: '0xACBDC47A577C97206990f5139485AB45427CFf00',
  drawId: 6,
  ticketNumbers
}

export const lotteryTicketsQuery = gql`
  {
    lottery_tickets {
      id,
      ticketId,
      timestamp,
      openkey,
      numbers
    }
  }
`

export const MUTATION_TODO_ADD = gql`
  mutation insertLotteryTicketsMutation ($objects: [test_insert_input]){
    insert_test(objects: $objects) {
      affected_rows
      returning {
        id,
        name
      }
    }
  }
`

export function * apolloTests ({ query, mutate }) {
  // const options = {
  //   context: {
  //     headers: {
  //       'X-Hasura-Access-Key': 'bWUMJ68zcbHjrdQVMC8z'
  //     }
  //   }
  // }
  const gqlResponse = yield call(query, { query: lotteryTicketsQuery })
  log({ gqlResponse, lotteryTicketsQuery })
  const gqlInsertTest = yield call(mutate, {
    mutation: MUTATION_TODO_ADD,
    variables: {
      objects: [
        {
          name: 'test'
        }
      ]
    }
  })
  log({ gqlInsertTest })
  // console.log({ testMutation, gqlInsertTest, testObject })
}
