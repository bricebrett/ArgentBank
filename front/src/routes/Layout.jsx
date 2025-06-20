import { Outlet, useRouteError, isRouteErrorResponse } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Error404 from "../pages/error404/Error404";

export const Layout = () => {
  const error = useRouteError();

  return (
    <>
      <Header />
      <main className="main">
        {isRouteErrorResponse(error) ? <Error404 /> : <Outlet />}
      </main>
      <Footer />
    </>
  );
};
