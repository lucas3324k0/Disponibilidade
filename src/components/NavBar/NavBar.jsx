import { NavLink } from "react-router-dom";
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="container-Navbar">
      <div className="Navbar">
        {/* <NavLink className="link" to="/" exact activeClassName="active-link">Home</NavLink> */}
        <NavLink className="link" to="/send" activeClassName="active-link">Disponibilidade</NavLink>
        <NavLink className="link" to="/loginAdm" activeClassName="active-link">Admin</NavLink>
      </div>
    </div>
  );
}

export default NavBar;
