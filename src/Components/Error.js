const Error = ({ error }) => {
  return (
    <div className="error">
      <div className="shadow"></div>
      <section className="error-container">
        <header>ERROR</header>
        <p className="error-text">{error.message}</p>
      </section>
    </div>
  )
}

export default Error;