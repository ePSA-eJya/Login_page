export default function Button({ buttonType, handleSubmit, disabled }) {
  return (
    <>
      <button className="button" onClick={handleSubmit} disabled={disabled}>
        {buttonType}
      </button>
    </>
  );
}
