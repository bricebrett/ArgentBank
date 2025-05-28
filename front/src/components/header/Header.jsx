import Logo from "../Logo";
import HeaderUserNotLogged from "../HeaderUserNotLogged";
import "./Header.css";

const Header = () => {
  return (
    <nav className="main-nav">
      <Logo />
      <HeaderUserNotLogged />
      {/* ternaire HeaderUserNotLogged : HeaderUserLogged */}
    </nav>
  );
};

export default Header;
