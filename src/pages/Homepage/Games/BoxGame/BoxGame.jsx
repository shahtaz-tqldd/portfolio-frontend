import React, { useState, useEffect } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { IoSquareOutline, IoTriangleOutline } from "react-icons/io5";
import { TbCircle, TbHexagon, TbPentagon } from "react-icons/tb";

const BoxGame = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [stagePosition, setStagePosition] = useState(184);
  const [fallingBox, setFallingBox] = useState({
    shape: "hexagon",
    left: 100,
    top: 6,
  });

  const startGame = () => {
    setGameStarted(true);
    setGameOver(false);
    setScore(0);
    startFallingBox();
  };

  const startFallingBox = () => {
    const shapes = ["triangle", "square", "pentagon", "hexagon", "circle"];
    const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
    setFallingBox({ shape: randomShape, left: Math.random() * 400, top: 6 });
  };

  const moveStage = (direction) => {
    if (gameStarted && !gameOver) {
      setStagePosition((prevPosition) =>
        direction === "left"
          ? Math.max(prevPosition - 20, 0)
          : Math.min(prevPosition + 20, 370)
      );
    }
  };

  const catchBox = () => {
    if (fallingBox && fallingBox.top >= 264) {
      const boxLeft = fallingBox.left;
      const boxRight = fallingBox.left + 40;

      const stageLeft = stagePosition;
      const stageRight = stagePosition + 128;

      if (boxLeft >= stageLeft && boxRight <= stageRight) {
        switch (fallingBox.shape) {
          case "triangle":
            setScore((prevScore) => prevScore + 3);
            break;
          case "square":
            endGame();
            break;
          case "pentagon":
            setScore((prevScore) => prevScore + 5);
            break;
          case "hexagon":
            setScore((prevScore) => prevScore + 6);
            break;
          case "circle":
            setScore((prevScore) => prevScore + 10);
            break;
          default:
            break;
        }
        startFallingBox();
      } else if (fallingBox.shape !== "square") {
        endGame();
      }
    }
  };

  const endGame = () => {
    setGameOver(true);
    setGameStarted(false);
    setFallingBox({
      shape: "hexagon",
      left: 100,
      top: 6,
    });
  };

  useEffect(() => {
    const fallInterval = setInterval(() => {
      if (gameStarted && fallingBox) {
        setFallingBox((prevBox) => ({
          ...prevBox,
          top: prevBox.top + 20,
        }));

        if (fallingBox.top > 264) {
          setFallingBox(null);
          startFallingBox();
        }
      }
    }, 150);

    return () => clearInterval(fallInterval);
  }, [gameStarted, fallingBox]);

  useEffect(() => {
    catchBox();
  }, [fallingBox]);

  const handleKeyDown = (event) => {
    if (gameStarted && !gameOver) {
      if (event.key === "ArrowLeft") {
        moveStage("left");
      } else if (event.key === "ArrowRight") {
        moveStage("right");
      }
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.removeEventListener("keydown", handleKeyDown);
    };
  }, [gameStarted, gameOver]);

  return (
    <div className="fleb pt-12 mt-20 md:flex hidden">
      <div>
        <h2 className="text-xl">
          Let's play
          <br /> <span className="text-primary text-3xl font-bold">box game</span>
        </h2>
        <p className="mt-5 text-lg">
          Don't catch{" "}
          <span className="font-semibold text-blue-500">a square!</span>
        </p>
        <p className="text-sm mt-2">You may use keyboard's left and right arrow key</p>
        <div className="mt-16 fl gap-3">
          {gameStarted ? (
            <div className="fl gap-8">
              <div className="flex gap-4">
                <button
                  onClick={() => moveStage("left")}
                  className="text-2xl bg-slate-200 p-1.5 rounded-full text-slate-800"
                >
                  <FaAngleLeft />
                </button>
                <button
                  onClick={() => moveStage("right")}
                  className="text-2xl bg-slate-200 p-1.5 rounded-full text-slate-800"
                >
                  <FaAngleLeft className="rotate-180" />
                </button>
              </div>
              <button
                onClick={endGame}
                disabled={!gameStarted}
                className="bg-rose-500 hover:bg-rose-600 tr font-bold px-4 py-2 text-white rounded text-sm"
              >
                Stop Game
              </button>
            </div>
          ) : (
            <button
              onClick={startGame}
              disabled={gameStarted}
              className="bg-primary hover:bg-opacity-80 tr text-slate-900 font-bold px-4 py-2 rounded text-sm"
            >
              Start Game
            </button>
          )}
        </div>
      </div>
      <div>
        <div className="bg-slate-800 border-2 border-slate-600 h-[320px] w-[500px] relative text-4xl rounded-xl">
          <div
            className="absolute"
            style={{ left: fallingBox?.left, top: fallingBox?.top }}
          >
            {fallingBox && fallingBox?.shape === "triangle" ? (
              <IoTriangleOutline className="text-blue-500" />
            ) : fallingBox?.shape === "square" ? (
              <IoSquareOutline className="text-green-500" />
            ) : fallingBox?.shape === "pentagon" ? (
              <TbPentagon className="text-purple-500" />
            ) : fallingBox?.shape === "hexagon" ? (
              <TbHexagon className="text-red-500" />
            ) : (
              <TbCircle className="text-orange-500" />
            )}
          </div>
          <div
            className="absolute bottom-2 bg-primary h-3 w-32 rounded-full"
            style={{ left: stagePosition }}
          />
          <div className="absolute top-2 right-2 text-sm bg-slate-600 bg-opacity-20 text-blue-500 py-1 px-4 rounded-full">
            Score: <strong> {score}</strong>
          </div>
        </div>
        <div className="text-xs mt-4 opacity-40 italic flex justify-end">Built with React and Tailwind</div>
      </div>
    </div>
  );
};

export default BoxGame;
