import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Budgetmain from '../components/BudgetMain';
import ExpenseList from '../components/ExpenseList';
import PageLayout from '../components/layouts/PageLayout/pagelayout';
import CategoriesPieChart from '../components/CategoriesPieChart';
import BalancePieChart from '../components/BalancePieChart';

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
    <>
      <PageLayout>
        <Budgetmain income={totalIncome} expenses={totalExpense} />
        <Link to="/transactionsPage">
          <button
            type="submit"
            className="btn"
            style={{ backgroundColor: '#562f5eff', color: 'white' }}
          >
            Agregar Movimiento
          </button>
        </Link>

        <div className="container d-flex py-2 justify-content-around items-center">
          <CategoriesPieChart transactions={transactions} />
          <BalancePieChart transactions={transactions} />
        </div>
        <div className="container position relative mt-4">
          <h3>Ultimos Movimientos</h3>
          <ExpenseList
            expenses={transactions}
            handleRemoveExpense={handleRemoveExpense}
          />
          <Link
            to="/transactionsPage"
            className="btn"
            style={{
              backgroundColor: '#ffa500',
              color: 'white',
              borderColor: '#ffa500',
              position: 'absolute',
              right: '120px',
              borderRadius: '5px',
              marginTop: '20px',
            }}
          >
            Ver todo
          </Link>
        </div>
      </PageLayout>
    </>
  );
}

export default HomePage;
