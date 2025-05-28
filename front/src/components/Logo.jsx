import { NavLink } from "react-router-dom";
import logo from "/argentBankLogo.png";

const Logo = () => {
  return (
    <NavLink className="main-nav-logo" to="/">
      <img src={logo} alt="Argent Bank Logo" className="main-nav-logo-image" />
      <h1 className="sr-only">Argent Bank</h1>
    </NavLink>
  );
};
export default Logo;
