// OutputDisplay.js
import React from 'react';

const OutputDisplay = ({ outputText }) => {
  return (
    <div>
      <h2>Generated Text:</h2>
      <p>{outputText}</p>
    </div>
  );
};

export default OutputDisplay;
