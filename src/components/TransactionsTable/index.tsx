import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { Container } from './styles'

interface Transaction {
  id: string
  title: string
  amount: number
  type: string
  category: string
  date: Date
}

export function TransactionsTable() {
  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data))
  }, [])
  const [transactions, setTransactions] = useState<Transaction[]>([])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        {transactions.map(transaction => {
          return (
            <tbody key={transaction.id}>
              <tr>
                <td>{transaction.title}</td>
                <td className={transaction.type}>R${transaction.amount}</td>
                <td>{transaction.category}</td>
                <td>{transaction.date}</td>
              </tr>
            </tbody>
          )
        })}

        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>20/10/2021</td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">R$2.000</td>
            <td>Casa</td>
            <td>20/10/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}
