import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "./theme";
import GenReveal from "./pages/GenReveal";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GenReveal />
    </ThemeProvider>
  );
}

export default App;
