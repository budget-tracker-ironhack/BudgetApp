import { Link, useLocation } from 'react-router-dom';
import './navbar.css';
import logo from '../../assets/polotno.png';

function Navbar() {
  const location = useLocation();

  const isLoginPage = location.pathname === '/loginPage';

  return (
    <nav
      className="navbar"
      id="topbar"
      style={{ paddingLeft: '10px', paddingRight: '10px' }}
    >
      <Link to="./homePage" className="navbar-brand d-flex">
        <img
          src={logo}
          width="50"
          height="50"
          className="d-inline-block align-top me-3 mt-3"
          alt=""
          id="logo"
        />
        <div className="nombre me-1">Zave</div>
      </Link>
      {!isLoginPage && (
        <Link
          to="/loginPage"
          className="btn ms-auto"
          style={{
            color: 'white',
            backgroundColor: '#ffa500',
            borderColor: '#ffa500',
            padding: '8px 15px',
            borderRadius: '5px',
          }}
        >
          Sign Out
        </Link>
      )}
      ;
    </nav>
  );
}
export default Navbar;
