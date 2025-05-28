import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

const HeaderUserNotLogged = () => {
  return (
    <NavLink className="main-nav-item" to="/login">
      <FontAwesomeIcon icon={faCircleUser} className="fontawesome-icon" />
      Sign In
    </NavLink>
  );
};
export default HeaderUserNotLogged;
