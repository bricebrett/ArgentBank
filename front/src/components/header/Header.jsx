import Logo from "../Logo";
import "./Header.css";
import { useSelector } from "react-redux";
import HeaderUserNotLogged from "../HeaderUserNotLogged";
import HeaderUserLogged from "../HeaderUserLogged";

const Header = () => {
  const state = useSelector((state) => state.user);
  return (
    <nav className="main-nav">
      <Logo />
      <div>
        {state.isLogged ? <HeaderUserLogged /> : <HeaderUserNotLogged />}
      </div>
    </nav>
  );
};

export default Header;
