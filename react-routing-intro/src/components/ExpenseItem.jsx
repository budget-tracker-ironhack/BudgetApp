const ExpenseItem = ({ expense, handleRemoveExpense }) => {
  const amount = expense.amount ?? 0;

  const textColor =
    expense.category === 'Trabajo' ? 'text-success' : 'text-danger';
  const date = new Date(expense.date).toLocaleDateString();
  const getBackgroundColor = (category) => {
    switch (category) {
      case 'Trabajo':
        return '#03bb85'; // Verde para trabajo
      case 'Vivienda':
        return '#007bff'; // Azul para vivienda
      case 'Alimentacion':
        return '#fd7e14'; // Naranja para alimentación
      case 'Transporte':
        return '#ffc107'; // Amarillo para transporte
      case 'Otros':
        return '#dc3545'; // Rojo para otros
      default:
        return '#6c757d'; // Gris por defecto
    }
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center">
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            width: '35px',
            height: '35px',
            backgroundColor: getBackgroundColor(expense.category),
            borderRadius: '50%',
            color: 'white',
            fontSize: '1.3rem',
          }}
        >
          <i className={` ${expense.icon}`}></i>
        </div>
        <span className="ms-2 text-black" style={{ fontSize: '1.4rem' }}>
          {expense.name}
        </span>
      </div>
      <div className="d-flex align-items-center w-25 justify-content-between">
        <span
          className="badge rounded-pill text-bg-secondary"
          style={{ fontSize: '0.6rem' }}
        >
          {date}
        </span>
        <div className="d-flex align-items-center">
          <span className={`fw-medium  ${textColor}`}>
            {amount.toFixed(2)}€
          </span>
          <button
            type="button"
            className="btn-close btn btn-danger ms-3"
            aria-label="Close"
            onClick={() => handleRemoveExpense(expense.id)}
          ></button>
        </div>
      </div>
    </li>
  );
};

export default ExpenseItem;
