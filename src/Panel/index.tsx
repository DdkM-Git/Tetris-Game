import { Box } from '@mui/material';
import { useState } from 'react';
import Board from '../Board/Board';
import SquareFigure from '../figures/SquareFigure';

interface FigureInterface {
    rows: number[];
    columns: number[];
}

interface GameInterface {
    Figures: FigureInterface;
}

type FigureType = "LeftPipeFigure" | "RectangleFigure" | "RightPipeFigure" | "SquareFigure";

function Panel() {

    const [gameBoard, setGameBoard] = useState<Board>(new Board());

    console.log(gameBoard.addFigure(new SquareFigure()))

    function drawFigure() {
        switch (Math.round(Math.random() * 3)) {
            case 0:
                return 1;
            case 1:
                return 1;
            case 2:
                return 1;
            case 3:
                return 1;
            default:
                return undefined;
        }
    }


    return (<Box sx={{ width: "80%", }}>
        <Box sx={{
            width: "660px",
            height: "660px",
            background: "#A99",
            display: "grid",
            gridTemplate: "repeat(20, 40px) / repeat(10, 40px);",
            rowGap: "2px",
            columnGap: "2px",
            paddingTop: "20px",
            paddingLeft: "20px"
        }}>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
            <Box sx={{ background: "#b00" }}></Box>
        </Box>
    </Box>
    );
}

export default Panel;
