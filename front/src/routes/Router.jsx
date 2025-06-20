// src/routes/Router.jsx
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./Layout";
import Error404 from "../pages/error404/Error404";
import Home from "../pages/Home";
import Login from "../pages/login/Login";
import Profile from "../pages/profile/Profile";
import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "profile",

        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;
