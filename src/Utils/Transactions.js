
export const filterIncomingTransactions = (transactions, openKey) => transactions.filter((f, i) => f.to === openKey)
export const filterOutcomingTransactions = (transactions, openKey) => transactions.filter((f, i) => f.to !== openKey)

export const splitTransactions = (transactions, openKey) => ({
  incoming: filterIncomingTransactions(transactions, openKey).reverse(),
  outcoming: filterOutcomingTransactions(transactions, openKey).reverse()
})
