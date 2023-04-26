import gql from 'graphql-tag'

export const LOTTERY_TICKETS_QUERY = gql`
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

export const LOTTERY_WINNERS_QUERY = gql`
  {
    lottery_winners {
      id,
      reward,
      openkey,
      timestamp,
      drawId,
      countWinTickets
    }
  }
`

export const PAST_DRAWS_QUERY = gql`
  {
    past_draws {
      id,
      drawId,
      jackpot,
      timestamp,
      winNumbers,
      ticketsSold,
      winnersCount
    }
  }
`

export const USER_TICKETS_QUERY = gql`
  {
    user_tickets {
      id,
      ticketId,
      drawId,
      numbers,
      openkey,
      multidraw
    }
  }
`
