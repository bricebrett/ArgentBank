import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isLogged, isLoading } = useSelector((state) => state.user);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return isLogged ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
