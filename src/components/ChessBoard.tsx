import React from 'react';
import Square from './Square';

const ChessBoard: React.FC = () => {
  // Create a 8x8 grid representing the chessboard with unique arrays for each row
  const grid = Array.from({ length: 8 }, () => Array.from({ length: 8 }, () => null));

  return (
    <div className='flex justify-center mt-32'>
    <div className="chess-board border-8 border-slate-950">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="flex">
          {row.map((_, colIndex) => (
            <Square
              key={`${rowIndex}-${colIndex}`} // Combine rowIndex and colIndex for a unique key
              value="" // The actual value you would like to display, e.g., piece symbol
              onClick={() => console.log(`Clicked on square: ${rowIndex}, ${colIndex}`)}
              className={`w-12 h-12 md:w-16 md:h-16 ${(rowIndex + colIndex) % 2 === 0 ? 'bg-white' : 'bg-black'}`} // Tailwind CSS classes for colors
            />
          ))}
        </div>
      ))}
    </div>
    </div>
  );
};

export default ChessBoard;
