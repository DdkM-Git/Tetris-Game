import { Box, Paper } from '@mui/material';
import './App.css';
import Panel from './Panel';

function App() {
  return (
    <Box sx={{
      background: "#5f5",
      width: "100vw",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <Paper
        elevation={10}
        sx={{
          width: "1000px",
          height: "680px",
          display: "flex",
        }}>
        <Panel />
      </Paper>
    </Box>
  );
}

export default App;
