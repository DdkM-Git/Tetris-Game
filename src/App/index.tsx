import { Box, Paper } from "@mui/material";
import Panel from "./Panel";

function App() {
  return (
    <Box
      sx={{
        background: "#B0E0E6",
        width: "100vw",
        height: "100vh",
        minWidth: "1000px",
        minHeight: "632px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={10}
        sx={{
          width: "1000px",
          height: "632px",
          display: "flex",
        }}
      >
        <Panel />
      </Paper>
    </Box>
  );
}

export default App;
