import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isLogged = useSelector((state) => state.user.isLogged);

  return isLogged ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
