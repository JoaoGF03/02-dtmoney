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
  createTransaction: (transaction: TransactionDTO) => Promise<void>
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

  async function createTransaction(transactionInput: TransactionDTO) {
    const response = await api.post('transactions', {
      ...transactionInput,
      createdAt: new Date()
    })

    const { transaction } = response.data

    setTransactions([...transactions, transaction])
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }} >
      {children}
    </TransactionsContext.Provider>
  )
}