import { useState } from 'react';
import Budgetmain from '../components/budgetmain';
import ExpenseList from '../components/ExpenseList';
import PageLayout from '../components/layouts/PageLayout/pagelayout';

function HomePage() {
  const [expenses, setExpenses] = useState([
    { id: 12, name: 'shopping', cost: 40 },
    { id: 13, name: 'holiday', cost: 400 },
    { id: 14, name: 'car service', cost: 50 },
  ]);

  const handleRemoveExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id != id));
  };

  return (
    <PageLayout>
      <Budgetmain />
      <h3>Lista de Movimientos</h3>
      <ExpenseList
        expenses={expenses}
        handleRemoveExpense={handleRemoveExpense}
      />
    </PageLayout>
  );
}

export default HomePage;
