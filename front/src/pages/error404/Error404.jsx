import "./error404.css";

const Error404 = () => {
  return (
    <section className="main bg-dark error404-container">
      <h1 className="error-title">404 - Page not found</h1>
      <p className="error-message">
        Oops ! La page que vous cherchez n'existe pas ou a été déplacée.
      </p>
    </section>
  );
};

export default Error404;
