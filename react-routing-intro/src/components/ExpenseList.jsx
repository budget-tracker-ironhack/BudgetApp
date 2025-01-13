import ExpenseItem from './ExpenseItem';

function ExpenseList({ expenses, handleRemoveExpense }) {
  return (
    <>
      <div className="m-4 mt-5">
        <div
          className="p-4 rounded"
          style={{
            backgroundColor: 'rgb(208, 196, 210)',
            border: '1px solid #562f5eff',
            borderRadius: '8px',
          }}
        >
          <h3>Ultimos Movimientos</h3>
        </div>
      </div>
      <ul className="list-group px-4">
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
