// src/routes/Router.jsx
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./Layout";
import Error404 from "../pages/error404/Error404";
import Home from "../pages/Home";
import Login from "../pages/login/Login";
import Profile from "../pages/profile/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error404 />,
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
        element: <Profile />,
      },
    ],
  },
]);

export default router;
