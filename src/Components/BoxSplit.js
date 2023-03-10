import React, { useState } from 'react';
import './BoxSplit.css';

function BoxSplit() {
  const [numSquares, setNumSquares] = useState(1);

  const handleClick = (event) => {
    if (numSquares < 16) { // max number of squares is 16
      setNumSquares(numSquares * 4);
    }
  };

  const generateSquares = (numSquares) => {
    if (numSquares === 1) {
      return <div className="box" onClick={handleClick}></div>;
    } else {
      const squares = [];
      for (let i = 0; i < numSquares; i++) {
        squares.push(
          <div className="sub-box" onClick={handleClick}>
            {generateSquares(numSquares / 4)}
          </div>
        );
      }
      return squares;
    }
  };

  return (
    <div className="container">
      {generateSquares(numSquares)}
    </div>
  );
}

export default BoxSplit;