const ExpenseItem = ({ expense, handleRemoveExpense }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {expense.name}
      <span className="">{expense.cost}</span>
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
