import { Button, Paper } from '@mui/material';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import './style.css';
import { useState } from 'react';

function PanelCard() {

    const [isClicked, setClicked] = useState<boolean>(false);

    return (
        <Button

            onClick={() => {
                setClicked(true);
            }}
            sx={{
                padding: "0px"
            }}>
            <Paper
                elevation={10}
                sx={{
                    width: "100%",
                    height: "100%",
                    animation: isClicked ? "3s 1 alternate slidein" : "none",
                    background: isClicked ?
                        'url("https://cdn.pixabay.com/photo/2023/11/21/16/21/zebras-8403717_960_720.jpg")' :
                        'url("https://cdn.pixabay.com/photo/2023/12/08/23/46/cat-8438334_960_720.jpg")',
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}>
            </Paper>
        </Button>
    );
}

export default PanelCard;
