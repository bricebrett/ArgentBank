import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import "./login.css";

const Login = () => {
  return (
    <section className="main bg-dark">
      <div className="sign-in-content">
        <FontAwesomeIcon icon={faCircleUser} className="fontawesome-icon" />
        <h1>Sign In</h1>
        <form action="#">
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
        </form>
        <button type="submit" className="sign-in-button">
          Sign In
        </button>
      </div>
    </section>
  );
};
export default Login;
