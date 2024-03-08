// InputForm.js
import React from 'react';

const InputForm = ({ inputText, handleInputChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your prompt:
        <textarea value={inputText} onChange={handleInputChange} />
      </label>
      <button type="submit">Generate Text</button>
    </form>
  );
};

export default InputForm;
