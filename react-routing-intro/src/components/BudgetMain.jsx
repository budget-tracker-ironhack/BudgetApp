function Budgetmain({ income = 0, expenses = 0 }) {
  const balance = income - expenses;
  return (
    <>
      <div className="w-auto">
        <h1 className="text-center">
          Welcome Back{' '}
          <span className="fw-bold" style={{ color: ' #cc2375ff' }}>
            Zaver
          </span>
        </h1>

        <div className=" d-flex gap-3 m-5 justify-content-around">
          <div
            className="card p-2 g-col-6"
            style={{ width: '250px', height: '125px', borderRadius: '8px' }}
          >
            <div className="card-body">
              <div className="d-flex align-items-end p-3 gap-2">
                <strong>Ingresos:</strong>
                {income.toFixed(2)}€
              </div>
            </div>
          </div>

          <div
            className="card p-2 g-col-6"
            style={{ width: '250px', height: '125px', borderRadius: '8px' }}
          >
            <div className="card-body">
              <div className="d-flex align-items-end p-3 gap-2">
                <strong>Gastos:</strong>
                {expenses.toFixed(2)}€<br />
              </div>
            </div>
          </div>

          <div
            className="card p-2 g-col-6"
            style={{ width: '250px', height: '125px', borderRadius: '8px' }}
          >
            <div className=" align-content-end">
              <strong>Balance:</strong>
              {balance.toFixed(2)}€<br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Budgetmain;
