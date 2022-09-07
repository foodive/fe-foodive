import React from "react";
import "../Styles/global.scss";

const Error = ({ setError, error }) => {
  return (
    <div className="error">
      <div className="shadow" onClick={() => setError(null)}></div>
      <section className="error-container">
        <header>ERROR</header>
        <p className="error-text">{error.message}</p>
      </section>
    </div>
  );
}

export default Error;