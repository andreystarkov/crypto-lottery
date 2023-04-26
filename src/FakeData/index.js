import faker from 'faker'
import { random } from 'Utils'

export const fakeBets = count => {
  return [...Array(count || 5)].map((e, i) => ({
    name: faker.name.firstName() + ' ' + faker.name.lastName(),
    draw: 320 + i,
    date: faker.date.past(),
    combination: [
      random(1, 50),
      random(1, 50),
      random(1, 50),
      random(1, 50),
      random(1, 50),
      random(1, 26)
    ]
  }))
}

export const fakeWinners = count => {
  return [...Array(count || 5)].map((e, i) => ({
    name: faker.name.firstName() + ' ' + faker.name.lastName(),
    draw: 320 + i,
    date: faker.date.past(),
    combination: [
      random(1, 50),
      random(1, 50),
      random(1, 50),
      random(1, 50),
      random(1, 50),
      random(1, 26)
    ],
    prize: random(1, 1000)
  }))
}

export const fakeRecentDraws = count => {
  return [...Array(count || 4)].map((e, i) => ({
    drawId: random(1000, 2000),
    draw: 320 + i,
    date: faker.date.past(),
    sold: random(10000, 20000),
    winners: random(10, 99),
    combination: [
      random(1, 50),
      random(1, 50),
      random(1, 50),
      random(1, 50),
      random(1, 50),
      random(1, 26)
    ],
    amount: random(1111, 9999)
  }))
}

export const fakeTransactions = count => {
  const transactionId = '0xc3492a9cd45f852da9c7b87be8eb6d3619bde289551a0c0621315d5526c8ee7b'
  return [...Array(count || 4)].map(() => ({
    transactionId,
    name: faker.name.firstName() + ' ' + faker.name.lastName(),
    date: faker.date.past(),
    amount: random(100, 999)
  }))
}

export const fakeProfileTransactions = count => {
  const transactionId = '0xc3492a9cd45f852da9c7b87be8eb6d3619bde289551a0c0621315d5526c8ee7b'
  return [...Array(count || 4)].map(() => ({
    transactionId,
    date: faker.date.past(),
    amount: random(100, 999)
  }))
}

export const fakeRecentWinners = count => {
  return [...Array(count || 4)].map(() => ({
    id: random(1000, 6000),
    name: faker.name.firstName() + ' ' + faker.name.lastName(),
    date: faker.date.past(),
    amount: (random(1000, 3000) * 0.0002).toFixed(3)
  }))
}

export const fakeCombinations = count => {
  return [...Array(count || 12)].map(() => [
    random(1, 50),
    random(1, 50),
    random(1, 50),
    random(1, 50),
    random(1, 50),
    random(1, 26)
  ])
}

export const fakePastDraws = count => {
  const combination = [
    random(1, 50),
    random(1, 50),
    random(1, 50),
    random(1, 50),
    random(1, 50),
    random(1, 26)
  ]
  return [...Array(count || 10)].map((e, i) => ({
    drawId: random(1000, 2000),
    ticket: random(1, 5),
    date: faker.date.past(),
    combination,
    winNumbers: random(1, 10) === 1 ? combination : [
      random(1, 50),
      random(1, 50),
      random(1, 50),
      random(1, 50),
      random(1, 15) === 3 ? combination[random(0, combination.length - 1)] : random(1, 50)
    ]
  }))
}
