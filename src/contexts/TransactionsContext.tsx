import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../services/api'

interface Transaction {
  id: string
  title: string
  amount: number
  type: string
  category: string
  createdAt: Date
}

type TransactionDTO = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionProviderProps {
  children: ReactNode
}

interface TransactionProviderData {
  transactions: Transaction[]
  createTransaction: (transaction: TransactionDTO) => void
}

export const TransactionsContext = createContext<TransactionProviderData>(
  {} as TransactionProviderData
)

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, [])

  function createTransaction(transaction: TransactionDTO) {
    api.post('transactions', transaction)

    // setTransactions(oldValue => [...oldValue, transaction])
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }} >
      {children}
    </TransactionsContext.Provider>
  )
}