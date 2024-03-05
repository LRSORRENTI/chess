import React from 'react';

// Define the props for the Square component
interface SquareProps {
    value: string;
    onClick: () => void;
    className: string; // Include className in the props
  }
  
// Square component
// Square component
const Square: React.FC<SquareProps> = ({ value, onClick, ...rest }) => {
    return (
      <button className={`square ${rest.className}`} onClick={onClick}>
        {value}
      </button>
    );
  };
  

export default Square;
