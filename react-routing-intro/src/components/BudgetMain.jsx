import gasto from '../assets/gasto.jpeg';
import balanceimg from '../assets/balance1.png';
import ingresos from '../assets/income.png';

function Budgetmain({ income = 0, expenses = 0 }) {
  const balance = income - expenses;
  return (
    <>
      <div className="w-auto">
        <h1 className="text-center">
          Welcome Back {''}
          <span
            className="fw-bold"
            style={{ color: ' #cc2375ff', fontSize: '48px' }}
          >
            Zaver
          </span>
        </h1>

        <div className=" d-flex m-4 justify-content-sm-evenly ">
          <div
            className="card  g-col-6"
            style={{ width: '280px', height: '100px' }}
          >
            <div className="d-flex align-items-center p-3 gap-2">
              <img
                src={ingresos}
                alt=""
                className=""
                style={{ width: '90px', height: '60px' }}
              />
              <h6>Ingresos:</h6>

              {income >= 0 ? (
                <span className="text-success fw-bold ">
                  +{income.toFixed(2)}€
                </span>
              ) : (
                <span className="text-danger fw-bold">
                  {income.toFixed(2)}€
                </span>
              )}
            </div>
          </div>

          <div
            className="card p-1 g-col-6"
            style={{ width: '275px', height: '100px' }}
          >
            <div className="d-flex align-items-center p-3 gap-2">
              <img
                src={gasto}
                alt=""
                className=""
                style={{ width: '90px', height: '60px', borderRadius: '8px' }}
              />
              <h6>Gastos:</h6>
              {expenses >= 0 ? (
                <span className="text-danger fw-bold">
                  +{expenses.toFixed(2)}€
                </span>
              ) : (
                <span className="text-danger fw-bold">
                  {expenses.toFixed(2)}€
                </span>
              )}

              <br />
            </div>
          </div>

          <div
            className="card p-1 g-col-6"
            style={{ width: '275px', height: '100px', borderRadius: '8px' }}
          >
            <div className="d-flex align-items-center p-3 gap-2 ">
              <img
                src={balanceimg}
                alt=""
                className=""
                style={{ width: '90px', height: '60px' }}
              />
              <h6>Balance:</h6>

              {balance >= 0 ? (
                <span className="text-success fw-bold">
                  +{balance.toFixed(2)}€
                </span>
              ) : (
                <span className="text-danger fw-bold">
                  {balance.toFixed(2)}€
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Budgetmain;
