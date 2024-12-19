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
  const [incomeList, setIncomeList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: expenseData } = await axios.get(
          'http://localhost:3000/expenses'
        );
        console.log("Gastos obtenidos:", expenseData);

        const totalExpenses = expenseData.reduce(
          (total, item) => total + item.amount,
          0
        );

        const { data: incomeData } = await axios.get(
          'http://localhost:3000/income'
        );
        console.log("Ingresos obtenidos:", incomeData);
        const totalIncome = incomeData.reduce(
          (total, item) => total + item.amount,
          0
        );

        setExpenses(totalExpenses);
        setIncome(totalIncome);
        setExpenseList(expenseData);
        setIncomeList(incomeData);

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

  const handleAddExpense = async (newExpense) => {
    console.log("handleAddExpense llamado", newExpense);
    try {
      const endpoint = newExpense.category === "Trabajo" ? "income" : "expenses";
      
      await axios.post(`http://localhost:3000/${endpoint}`, newExpense);

      const { data: expenseData } = await axios.get("http://localhost:3000/expenses");
      const { data: incomeData } = await axios.get('http://localhost:3000/income');

      setExpenseList(expenseData);
      setIncomeList(incomeData);
  
      setExpenses(updatedTotalExpenses);
    } catch (error) {
      console.error("Error al agregar la transacción:", error);
    }
  };
  
  const combinedList = [
    ...expenseList.map(item => ({ ...item, type: 'expense' })),
    ...incomeList.map(item => ({ ...item, type: 'income' }))
    ].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <PageLayout>
      <Budgetmain income={income} expenses={expenses} />
      <AddExpense handleAddExpense={handleAddExpense} />
      <h3>Lista de Movimientos</h3>
      <ExpenseList
        expenses={combinedList}
        handleRemoveExpense={handleRemoveExpense}
      />
    </PageLayout>
  );
}

export default HomePage;
