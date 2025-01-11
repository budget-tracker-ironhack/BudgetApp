import ExpenseItem from './ExpenseItem';

function ExpenseList({ expenses, handleRemoveExpense }) {
  return (
    <>
      <div className="m-4 mt-5">
        <h3>Ultimos Movimientos</h3>
      </div>
      <ul className="list-group">
        {expenses
          .sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          )
          .slice(0, 5)
          .map((expense) => (
            <ExpenseItem
              key={`expenseItem-${expense.id}`}
              expense={expense}
              handleRemoveExpense={handleRemoveExpense}
            />
          ))}
      </ul>
    </>
  );
}

export default ExpenseList;
