import React, { useState } from 'react';
import axios from 'axios';



const Chatbot = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/engines/davinci/completions',
        {
          prompt: inputText,
          max_tokens: 50, // Adjust the max_tokens parameter as needed
          temperature: 0.7, // Adjust the temperature parameter as needed
          n: 1,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer YOUR_OPENAI_API_KEY',
          },
        }
      );
      setOutputText(response.data.choices[0].text.trim());
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Welcome to the Chatbot!</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your prompt:
          <textarea value={inputText} onChange={handleInputChange} />
        </label>
        <button type="submit">Generate Text</button>
      </form>
      {outputText && (
        <div>
          <h2>Generated Text:</h2>
          <p>{outputText}</p>
        </div>
      )}
    </div>
  );
};

export default Chatbot;

