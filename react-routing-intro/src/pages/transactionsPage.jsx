import { useEffect, useState } from 'react';
import ExpenseList from '../components/ExpenseList';
import PageLayout from '../components/layouts/PageLayout/pagelayout';
import axios from 'axios';
import AddExpense from '../components/AddExpense';
import AllTransactionsList from '../components/AllTransactionsList';
import Toast from '../components/Toast';
import moneybagicon from '../assets/money-bag-icon.png';

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
            <div className="row g-5">
                <div className="col-md-4 mb-3">
                    <AddExpense handleAddExpense={handleAddExpense} />
                    <div 
                      className="card my-4" 
                      style={{ 
                        maxWidth: '300px' , 
                        backgroundColor: 'rgb(208, 196, 210)', 
                        border: '1px solidrgb(215, 102, 237)', 
                        borderRadius: '8px'
                      }}>
                    <div className="d-flex align-items-center p-3">
                      <img 
                          src={moneybagicon}
                          alt="Money Bag Icon"
                          className="me-3"
                          style={{ width: '60px', height: '60px',borderRadius: '8px' }} 
                        />  
                      <h5 className="card-title mb-1">Balance</h5>
                      <p className="card-text mb-0 ms-3 fs-5" style={{ fontWeight: 'bold' }}>
                          {balance >= 0
                              ? <span className="text-success">+{balance.toFixed(2)}€</span>
                              : <span className="text-danger">{balance.toFixed(2)}€</span>}
                      </p>
                      </div>
                    </div>
                </div>
                <div className="col-md-8">
                  <div
                    className="p-4 rounded"
                    style={{ backgroundColor: "rgb(208, 196, 210)", border: "1px solid #562f5eff", borderRadius: "8px" }}
                  >
                    <h3>Todos los movimientos</h3>
                  
                    <div className="my-3 d-flex align-items-center">
                        <label htmlFor="month" className="form-label mb-0 me-5">Selecciona un mes</label>
                        <select
                            id="month"
                            className="form-select-sm"
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
                    </div>
                    <div
                        className="p-4 mt-3 rounded"
                        style={{ backgroundColor: "transparent" }}
                      >
                    <AllTransactionsList
                        expenses={filteredExpenses}
                        handleRemoveExpense={handleRemoveExpense}
                    />
                    </div>
                    <Toast
                        message={toastMessage}
                        show={showToast}
                        onClose={() => setShowToast(false)}
                    />
                </div>
            </div>
        </PageLayout>
    );
}

export default TransactionsPage;

  