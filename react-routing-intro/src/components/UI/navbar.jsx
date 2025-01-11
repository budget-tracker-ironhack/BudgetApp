import { Link, useLocation } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  const location = useLocation();

  const isLoginPage = location.pathname ==="/loginPage";

  return (
    <nav className="navbar" id="topbar" style={{ paddingLeft: '15px', paddingRight: '15px' }}>
      <Link to="./homePage" className="navbar-brand d-flex">
        <img
          src="./src/assets/LogoZave1.png"
          width="70"
          height="60"
          className="d-inline-block align-top "
          alt=""
          id="logo"
        />
        <div className="nombre">Zave</div>
      </Link>

      {!isLoginPage && (
      <Link to="/loginPage" 
        className="btn ms-auto" 
        style={{ 
          color: 'white', 
          backgroundColor: '#ffa500', 
          borderColor: '#ffa500', 
          padding: '8px 15px',
          borderRadius: '5px', }}>
        Sign Out
      </Link>
      )};
    </nav>
  );
}
export default Navbar;
