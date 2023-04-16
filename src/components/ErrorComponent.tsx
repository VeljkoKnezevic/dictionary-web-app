const ErrorComponent = () => {
  return (
    <div className="error">
      <div className="error__emoji">😕</div>
      <p className="error__heading">No definitions found</p>
      <p className="error__para">
        Sorry pal, we couldn&apos;t find definitions for the word you were
        looking for. You can try the search again at later time or head to the
        web instead.
      </p>
    </div>
  );
};

export default ErrorComponent;
