import { Box, Button, Typography } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import Board from "./Board";

function Panel() {
  const gameBoard = useMemo(() => new Board(), []);
  const [currentMatrix, setCurrentMatrix] = useState<number[][]>(gameBoard.getMatrix());
  const [intervalId, setIntervalId] = useState<NodeJS.Timer | undefined>(undefined);

  function makeMove(e: KeyboardEvent) {
    let tmpMatrix = gameBoard.getMatrix();

    if (e.key === "ArrowLeft") tmpMatrix = gameBoard.moveLeftFigure().getMatrix();
    else if (e.key === "ArrowRight") tmpMatrix = gameBoard.moveRightFigure().getMatrix();
    else if (e.key === "ArrowDown") tmpMatrix = gameBoard.moveDownFigure().getMatrix();
    else if (e.key === "a") tmpMatrix = gameBoard.rotateLeftFigure().getMatrix();
    else if (e.key === "d") tmpMatrix = gameBoard.rotateRightFigure().getMatrix();

    setCurrentMatrix(tmpMatrix);
  }

  function getStarted(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    setIntervalId(
      setInterval(() => {
        setCurrentMatrix(gameBoard.moveDownFigure().getMatrix());
      }, 1500)
    );

    window.addEventListener("keydown", makeMove);
  }

  function getFinished(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    clearInterval(intervalId);
    setIntervalId(undefined);
    window.removeEventListener("keydown", makeMove);
  }

  useEffect(() => {
    /*const interval = setInterval(() => {
      setCurrentMatrix(gameBoard.moveDownFigure().getMatrix());
    }, 1500);
    window.addEventListener("keydown", makeMove);

    return () => {
      clearInterval(interval);
      window.removeEventListener("keydown", makeMove);
    };*/
  }, []);

  return (
    <>
      <Box sx={{ width: "fit-content" }}>
        <Box
          sx={{
            width: "390px",
            height: "612px",
            background: "#A99",
            display: "grid",
            gridTemplate: "repeat(20, 36px) / repeat(10, 36px);",
            rowGap: "1px",
            columnGap: "1px",
            paddingTop: "20px",
            paddingLeft: "20px",
          }}
        >
          {currentMatrix.flat(Infinity).map((currentValue) => {
            if (currentValue == 1) {
              return (
                <Box
                  sx={{
                    background: "#f00",
                    webkitBoxShadow: "inset 0px 0px 20px 1px rgba(66, 68, 90, 1)",
                    mozBoxShadow: "inset 0px 0px 20px 1px rgba(66, 68, 90, 1)",
                    boxShadow: "inset 0px 0px 5px 1px rgba(66, 68, 90, 1)",
                  }}
                ></Box>
              );
            } else {
              return (
                <Box
                  sx={{
                    background: "#0b0",
                    webkitBoxShadow: "inset 0px 0px 20px 1px rgba(66, 68, 90, 1)",
                    mozBoxShadow: "inset 0px 0px 20px 1px rgba(66, 68, 90, 1)",
                    boxShadow: "0px 0px 4px 1px rgba(66, 68, 90, 1)",
                  }}
                ></Box>
              );
            }
          })}
        </Box>
      </Box>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ display: "flex", padding: "20px" }}>
          <Typography sx={{ fontWeight: "bold", marginRight: "20px", fontSize: "40px" }}>Wynik:</Typography>
          <Typography sx={{ fontSize: "40px" }}>{gameBoard._score}</Typography>
        </Box>
        <Button variant="contained" disabled={!!intervalId} onClick={getStarted}>
          Rozpocznij
        </Button>
        <Button variant="contained" disabled={!intervalId} onClick={getFinished}>
          stop
        </Button>
        {gameBoard._isGameOver && <Typography sx={{ color: "#F00", background: "#000" }}>Game over</Typography>}
      </Box>
    </>
  );
}

export default Panel;
