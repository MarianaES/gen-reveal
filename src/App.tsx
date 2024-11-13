import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "./theme";
import GenReveal from "./pages/GenReveal";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LanguageProvider>
        <GenReveal />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
