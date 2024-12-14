const ExpenseItem = ({ expense, handleRemoveExpense }) => {
  const amount = expense.amount ?? 0;
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {expense.name}
      <span className="">{amount.toFixed(2)}€</span>
      <div>
        <button
          type="button"
          className="btn-close btn btn-danger"
          aria-label="Close"
          onClick={() => handleRemoveExpense(expense.id)}
        ></button>
      </div>
    </li>
  );
};

export default ExpenseItem;
