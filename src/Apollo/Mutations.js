import gql from 'graphql-tag'

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

export const MUTATION_LOTTERY_TICKETS_ADD = gql`
  mutation insertLotteryTicketsMutation ($objectsLotteryTickets: [lottery_tickets_insert_input]) {
    insert_lottery_tickets (objects: $objectsLotteryTickets) {
      affected_rows
      returning {
        id
      }
    }
  }
`

export const MUTATION_LOTTERY_WINNERS_ADD = gql`
  mutation insert_lottery_winners ($objectsLotteryWinners: [lottery_winners_insert_input]) {
    insert_lottery_winners (objects: $objectsLotteryWinners) {
      affected_rows
      returning {
        id
      }
    }
  }
`

export const MUTATION_PAST_DRAWS_ADD = gql`
  mutation insert_past_draws ($objectsPastDraws: [past_draws_insert_input]) {
    insert_past_draws (objects: $objectsPastDraws) {
      affected_rows
      returning {
        id
      }
    }
  }
`

export const MUTATION_USER_TICKETS_ADD = gql`
  mutation insert_user_tickets ($objectsUserTickets: [user_tickets_insert_input]) {
    insert_user_tickets (objects: $objectsUserTickets) {
      affected_rows
      returning {
        id
      }
    }
  }
`