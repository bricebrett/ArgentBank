import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const HeaderUserLogged = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const state = useSelector((state) => state.user);
  const userName = state.userInfo?.userName;

  const handleLogout = () => {
    dispatch(logout());
    sessionStorage.removeItem("token");
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      <NavLink className="main-nav-item" to="/profile">
        <FontAwesomeIcon icon={faCircleUser} className="fontawesome-icon" />
        {userName}
      </NavLink>
      <NavLink className="main-nav-item" to="/" onClick={() => handleLogout()}>
        <FontAwesomeIcon
          icon={faRightFromBracket}
          className="fontawesome-icon"
        />
        Sign Out
      </NavLink>
    </>
  );
};

export default HeaderUserLogged;
