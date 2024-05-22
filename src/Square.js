import React from 'react';

const Square = ({ value, onSquareClick }) => {
  return (
    <button className="square" onClick={onSquareClick} data-testid="square">
      {value}
    </button>
  );
};

export default Square;
