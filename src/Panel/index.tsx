import { Box, Button, Typography } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import Board from "../Board/Board";
import SquareFigure from "../figures/SquareFigure";

interface FigureInterface {
  rows: number[];
  columns: number[];
}

interface GameInterface {
  Figures: FigureInterface;
}

type FigureType = "LeftPipeFigure" | "RectangleFigure" | "RightPipeFigure" | "SquareFigure";

function Panel() {
  const gameBoard = useMemo(() => new Board(), []);
  const [currentMatrix, setCurrentMatrix] = useState<number[][]>(gameBoard.getMatrix());

  function makeMove(e: KeyboardEvent) {
    if (e.key === "ArrowLeft") setCurrentMatrix(gameBoard.moveLeftFigure().getMatrix());
    else if (e.key === "ArrowRight") setCurrentMatrix(gameBoard.moveRightFigure().getMatrix());
    else if (e.key === "ArrowDown") setCurrentMatrix(gameBoard.moveDownFigure().getMatrix());
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMatrix(gameBoard.moveDownFigure().getMatrix());
    }, 1500);
    window.addEventListener("keydown", makeMove);

    return () => {
      clearInterval(interval);
      window.removeEventListener("keydown", makeMove);
    };
  }, []);

  return (
    <>
      <Box sx={{ width: "80%" }}>
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
      {gameBoard._isGameOver && <Typography sx={{ color: "#F00", background: "#000" }}>Game over</Typography>}
    </>
  );
}

export default Panel;
