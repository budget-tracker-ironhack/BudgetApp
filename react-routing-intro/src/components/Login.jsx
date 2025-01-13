import { Link } from 'react-router-dom';
import pageimg from '../assets/imagenlogopage.jpg';
import './login.css';

function Login() {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div
        className="col-md-6 d-none d-md-block p-0"
        style={{
          flex: '0 0 60%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          src={pageimg}
          alt="Login illustration"
          className="img-fluid"
          style={{
            objectFit: 'contain',
            maxWidth: '90%',
            maxHeight: '80%',
          }}
        />
      </div>
      <div
        className="row d-flex"
        style={{
          flex: '1',
          maxWidth: 'auto',
          width: 'auto',
          padding: '2rem',
        }}
      >
        <div className="col-md-8 p-4justify-content-center">
          <h2 className="text-center fs-1 m-4">
            Plan, <span className="custom-zave">Zave</span>, and Achieve Your
            Goals
          </h2>
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
            <Link
              to="/homePage"
              className="btn custom-btn w-70"
              style={{
                backgroundColor: '#ffaf03ff', // Color de fondo personalizado
                color: 'white', // Color del texto
                border: 'none', // Eliminar borde
              }}
            >
              <span> Create Account</span>
              <i className="bi bi-person-fill mx-1"></i>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
