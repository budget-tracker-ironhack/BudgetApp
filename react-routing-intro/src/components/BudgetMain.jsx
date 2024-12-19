
function Budgetmain({ income=0, expenses=0 }) {
  const balance = income - expenses;
  return (
    <div className="card w-75 mb-3">
      <div className="card-body">
        <h5 className="card-title">Balance</h5>
        <p className="card-text">
          <strong>Ingresos:</strong>{income.toFixed(2)}€<br/>
          <strong>Gastos:</strong>{expenses.toFixed(2)}€<br/>
          <strong>Balance:</strong>{balance.toFixed(2)}€<br/>
        </p>
      </div>
    </div>
  );
}
export default Budgetmain;
