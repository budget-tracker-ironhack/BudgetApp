import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Budgetmain from '../components/budgetmain';
import ExpenseList from '../components/ExpenseList';
import PageLayout from '../components/layouts/PageLayout/pagelayout';
import axios from 'axios';
import AddExpense from '../components/AddExpense';

function HomePage() {
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/transactions')
      .then((response) => {
        setTransactions(response.data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    setTotalExpense(
      transactions.reduce(
        (expense, transaction) =>
          transaction.type == 'expense'
            ? expense + transaction.amount
            : expense,
        0
      )
    );

    setTotalIncome(
      transactions.reduce(
        (income, transaction) =>
          transaction.type == 'income' ? income + transaction.amount : income,
        0
      )
    );
  }, [transactions]);

  const handleRemoveExpense = (id) => {
    axios
      .delete(`http://localhost:3000/transactions/${id}`)
      .then((response) => {
        setTransactions(
          transactions.filter(
            (transaction) => transaction.id !== response.data.id
          )
        );
      })
      .catch((error) => console.error('Error eliminando el gasto:', error));
  };

  return (
    <PageLayout>
      <Budgetmain income={totalIncome} expenses={totalExpense} />
      <Link to="/transactionsPage">
        <button>Agregar Movimiento</button>
      </Link>
      <h3>Ultimos Movimientos</h3>
      <ExpenseList
        expenses={transactions}
        handleRemoveExpense={handleRemoveExpense}
      />
    </PageLayout>
  );
}

export default HomePage;
