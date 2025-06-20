import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import "./login.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserByEmail, getUserProfile } from "../../redux/user/userThunks";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

/**
 * Page de connexion de l’utilisateur.
 *
 * - Permet de saisir l’email, le mot de passe et l’option "Remember me".
 * - À la soumission :
 *   - Envoie une requête d’authentification via Redux.
 *   - Puis récupère le profil de l'utilisateur s’il est connecté.
 * - Redirige automatiquement vers `/profile` si la connexion est déjà active.
 */

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.user.isLogged);

  useEffect(() => {
    if (isLogged) {
      navigate("/profile");
    }
  }, [isLogged, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchUserByEmail({ email, password, rememberMe }))
      .unwrap()
      .then(() => {
        dispatch(getUserProfile());
      });
  };

  return (
    <section className="main bg-dark">
      <div className="sign-in-content">
        <FontAwesomeIcon icon={faCircleUser} className="fontawesome-icon" />
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-remember">
            <input
              type="checkbox"
              id="remember-me"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className="sign-in-button">
            Sign In
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
