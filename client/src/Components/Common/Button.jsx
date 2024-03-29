function Button({ btnClass, name, handleButtonClick}) {
  return (
    <>
      <button
        onClick={handleButtonClick}
        className={`btn ${btnClass} color1`}
        type="button"
      >
        {name}
      </button>
    </>
  );
}

export default Button;
