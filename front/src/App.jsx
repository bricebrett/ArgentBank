import { RouterProvider } from "react-router-dom";
import router from "./routes/Router";
import "./index.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUserProfile } from "./redux/user/userThunks";
import { getToken } from "./utils/auth";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = getToken();
    if (token) {
      dispatch(getUserProfile());
    }
  }, [dispatch]);
  return <RouterProvider router={router} />;
}

export default App;
