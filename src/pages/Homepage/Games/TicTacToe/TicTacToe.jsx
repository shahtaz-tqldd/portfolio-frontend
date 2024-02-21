import React, { useEffect, useState } from "react";
import { RxCross2, RxCircle } from "react-icons/rx";

const TicTacToe = () => {
  const initialBoard = Array(9).fill(null);
  const [board, setBoard] = useState(initialBoard);
  const [xIsNext, setXIsNext] = useState(true);

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }

    return null;
  };

  const handleClick = (index) => {
    const squares = [...board];

    if (calculateWinner(squares) || squares[index]) {
      return;
    }

    squares[index] = xIsNext ? "X" : "O";
    setBoard(squares);
    setXIsNext(!xIsNext);
  };

  const makeComputerMove = () => {
    const squares = [...board];

    if (calculateWinner(squares)) {
      return;
    }

    // Find empty squares
    const emptySquares = squares.reduce((acc, value, index) => {
      if (!value) {
        acc.push(index);
      }
      return acc;
    }, []);

    // Randomly choose an empty square
    const randomIndex = Math.floor(Math.random() * emptySquares.length);
    const randomSquare = emptySquares[randomIndex];

    squares[randomSquare] = "O";
    setBoard(squares);
    setXIsNext(true);
  };
  useEffect(() => {
    // Check if it's the computer's turn and the game is not over
    if (!xIsNext) {
      // Call the function to make the computer's move after a short delay
      const computerMoveTimeout = setTimeout(() => {
        makeComputerMove();
      }, 500);

      // Cleanup the timeout to avoid memory leaks
      return () => clearTimeout(computerMoveTimeout);
    }
  }, [xIsNext, makeComputerMove]);
  const resetGame = () => {
    setBoard(initialBoard);
    setXIsNext(true);
  };

  const renderSquare = (index) => (
    <div
      className="h-16 w-16 grid place-content-center cursor-pointer hover:bg-slate-800 tr"
      onClick={() => handleClick(index)}
    >
      {board[index] === "X" && <RxCross2 className="text-xl text-slate-400" />}
      {board[index] === "O" && <RxCircle className="text-xl text-slate-400" />}
    </div>
  );

  const winner = calculateWinner(board);
  const status = winner
    ? `${winner === "X" ? "Congrats! You Won" : "Ahha! I won"}`
    : `${xIsNext ? "Your move" : "My move"}`;

  return (
    <div className="flex justify-center flex-col items-center">
      <h2 className="text-xl mb-8">
        Let's play
        <br />{" "}
        <span className="text-primary font-bold text-3xl">tic tac toe</span>
      </h2>
      <div className="relative">
        <div className="absolute h-48 border-l-2 border-slate-600 left-16"></div>
        <div className="absolute h-48 border-l-2 border-slate-600 left-32"></div>
        <div className="absolute w-48 border-t-2 border-slate-600 top-16"></div>
        <div className="absolute w-48 border-t-2 border-slate-600 top-32"></div>
        <div className="flex">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="flex">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="flex">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
      <div className="fl flex-col gap-2 mt-8 text-sm relative">
        <div>{board.indexOf(null) === -1 ? "It's a draw!" : status}</div>
        {board.indexOf("X") !== -1 && board.indexOf("O") !== -1 && (
          <button
            className="text-xs text-blue-400 py-1 px-4 rounded-full border border-blue-400 absolute top-8 hover:bg-blue-500 hover:bg-opacity-20 tr"
            onClick={resetGame}
          >
            Reset
          </button>
        )}
      </div>

      <div className="text-xs mt-16 opacity-40 italic flex justify-center">
        Built with React and Tailwind
      </div>
    </div>
  );
};

export default TicTacToe;
