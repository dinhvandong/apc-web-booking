import React from 'react';

const MultiLineSentence = ({ text }) => {
  // Split the input text into an array of sentences
  const sentences = text.split(".");

  return (
    <ul>
      {sentences.map((sentence, index) => (
        <li key={index}>{sentence}</li>
      ))}
    </ul>
  );
};

export default MultiLineSentence;