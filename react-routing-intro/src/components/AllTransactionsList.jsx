import ExpenseItem from './ExpenseItem';

function TransactionsList({ expenses, handleRemoveExpense }) {
  return (
    <ul className="list-group">
      {expenses
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .map((expense) => (
          <ExpenseItem
            key={`expenseItem-${expense.id}`}
            expense={expense}
            handleRemoveExpense={handleRemoveExpense}
          />
        ))}
    </ul>
  );
}

export default TransactionsList;
