const InputField = ({ text, handleInput, handleSubmit }) => {
  return (
    <label>
      <input
        placeholder="Enter text"
        value={text}
        onChange={(e) => handleInput(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>
    </label>
  );
};

export default InputField;
