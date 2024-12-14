import { useEffect, useState } from 'react';
import Budgetmain from '../components/budgetmain';
import ExpenseList from '../components/ExpenseList';
import PageLayout from '../components/layouts/PageLayout/pagelayout';
import axios from 'axios';
import AddExpense from '../components/AddExpense';

function HomePage() {
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [expenseList, setExpenseList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: expenseData } = await axios.get(
          'http://localhost:3000/expenses'
        );

        const totalExpenses = expenseData.reduce(
          (total, item) => total + item.amount,
          0
        );

        const { data: incomeData } = await axios.get(
          'http://localhost:3000/income'
        );
        const totalIncome = incomeData.reduce(
          (total, item) => total + item.amount,
          0
        );

        setExpenses(totalExpenses);
        setIncome(totalIncome);
        setExpenseList(expenseData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleRemoveExpense = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/expenses/${id}`);

      setExpenseList((prevExpenses) => {
        const updatedExpenses = prevExpenses.filter(
          (expense) => expense.id !== id
        );

        const updatedTotalExpenses = updatedExpenses.reduce(
          (total, item) => total + item.amount,
          0
        );
        setExpenses(updatedTotalExpenses);

        return updatedExpenses;
      });
    } catch (error) {
      console.error('Error eliminando el gasto:', error);
    }
  };

  const handleAddExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  return (
    <PageLayout>
      <Budgetmain income={income} expenses={expenses} />
      <Budgetmain />
      <AddExpense handleAddExpense={handleAddExpense} />
      <h3>Lista de Movimientos</h3>
      <ExpenseList
        expenses={expenseList}
        handleRemoveExpense={handleRemoveExpense}
      />
    </PageLayout>
  );
}

export default HomePage;
