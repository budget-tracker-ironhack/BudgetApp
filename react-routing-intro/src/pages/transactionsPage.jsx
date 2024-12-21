import { useEffect, useState } from 'react';
import ExpenseList from '../components/ExpenseList';
import PageLayout from '../components/layouts/PageLayout/pagelayout';
import axios from 'axios';
import AddExpense from '../components/AddExpense';
import AllTransactionsList from '../components/AllTransactionsList';
import Toast from '../components/Toast';

function TransactionsPage () {

  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState('');
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

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

  const handleAddExpense = (newExpense) => {
    newExpense.type = newExpense.category === 'Trabajo' ? 'income' : 'expense';
    axios
      .post(`http://localhost:3000/transactions`, newExpense)
      .then((response) => {
        setTransactions([...transactions, response.data]);
        setToastMessage(`Agregado con éxito`);
        setShowToast(true);
      })
      .catch((error) =>
        console.error('Error al agregar la transacción:', error)
      );
  };

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const filterByMonth = (transactions, selectedMonth) => {
    if (!selectedMonth) return transactions;
    return transactions.filter((transaction) => {
      const expenseDate = new Date(transaction.date);
      return expenseDate.getMonth() === parseInt(selectedMonth) - 1;
    });
  };

  const filteredExpenses = filterByMonth(transactions, selectedMonth);
  const balance = totalIncome - totalExpense;

    return (
        <PageLayout>
          <AddExpense handleAddExpense={handleAddExpense} />
          <h3>Todos los movimientos</h3>
          <div className="mb-3">
            <label htmlFor="month" className="form-label">Selecciona un mes</label>
            <select
                id="month"
                className="form-select"
                value={selectedMonth}
                onChange={handleMonthChange}
                >
                <option value="">Todos</option>
                <option value="1">Enero</option>
                <option value="2">Febrero</option>
                <option value="3">Marzo</option>
                <option value="4">Abril</option>
                <option value="5">Mayo</option>
                <option value="6">Junio</option>
                <option value="7">Julio</option>
                <option value="8">Agosto</option>
                <option value="9">Septiembre</option>
                <option value="10">Octubre</option>
                <option value="11">Noviembre</option>
                <option value="12">Diciembre</option>
                    
            </select>
          </div>

         <div className="card my-3" style={{ maxWidth: '250px' }}>
            <div className="card-body">
                <h5 className="card-title">Balance Total</h5>
                <p className="card-text">
                    {balance >= 0
                    ? <span className="text-success">+{balance.toFixed(2)}€</span>
                    : <span className="text-danger">{balance.toFixed(2)}€</span>}
                </p>
            </div>
         </div>
          <AllTransactionsList
            expenses={filteredExpenses}
            handleRemoveExpense={handleRemoveExpense}
          />
          <Toast 
            message={toastMessage} 
            show={showToast} 
            onClose={() => setShowToast(false)}
           />
        </PageLayout>
      );
    }

export default TransactionsPage;

  