import ExpenseItem from './ExpenseItem';

function ExpenseList({ expenses, handleRemoveExpense }) {
  return (
    <ul className="list-group">
      {expenses.map((expense) => (
        <ExpenseItem
          key={`expenseItem-${expense.id}`}
          expense={expense}
          handleRemoveExpense={handleRemoveExpense}
        />
      ))}
    </ul>
  );
}

export default ExpenseList;
