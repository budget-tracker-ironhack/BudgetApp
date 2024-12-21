const ExpenseItem = ({ expense, handleRemoveExpense }) => {
  const amount = expense.amount ?? 0;

  const textColor = expense.category === "Trabajo" ? "text-success" : "text-danger";
  const date = new Date(expense.date).toLocaleDateString();

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center">
        <i className={`me-2 ${expense.icon}`} style={{ fontSize: "1.2rem" }}></i>
        {expense.name}
        <span className="ms-3 text-black-50" style={{ fontSize: '0.6rem' }}>{date}</span>
      </div>
      <div className="d-flex align-items-center">
        <span className={`fw-light ${textColor}`}>{amount.toFixed(2)}€</span>
        <button
          type="button"
          className="btn-close btn btn-danger ms-3"
          aria-label="Close"
          onClick={() => handleRemoveExpense(expense.id)}
        ></button>
      </div>
    </li>
  );
};

export default ExpenseItem;
