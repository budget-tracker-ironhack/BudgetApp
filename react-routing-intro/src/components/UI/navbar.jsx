import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar" id="topbar">
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
    </nav>
  );
}
export default Navbar;
