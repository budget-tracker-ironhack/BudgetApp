import { Link } from 'react-router-dom';
import pmbimg from '../assets/piggy-money-bank-5085515_1280.png';
function Login() {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div
        className="row shadow-sm"
        style={{ maxWidth: '800px', width: '100%' }}
      >
        <div className="col-md-6 d-none d-md-block p-0">
          <img
            src={pmbimg}
            alt="Login illustration"
            className="img-fluid h-100"
            style={{ objectFit: 'cover' }}
          />
        </div>

        <div className="col-md-6 p-4 d-flex flex-column justify-content-center">
          <h3 className="text-center mb-3">
            Plan, Save, and Achieve Your Goals
          </h3>
          <form method="post">
            <div className="mb-3">
              <input
                type="text"
                className="userName form-control"
                required
                placeholder="What is your name?"
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                required
              />
            </div>
            <Link to="/homePage" className="btn btn-primary w-100">
              <span> Create Account</span>
              <i className="bi bi-person-fill"></i>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
