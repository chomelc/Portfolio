import "./App.css";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Root from "./routes/root";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

const PortfolioTheme = createTheme({
  palette: {
    primary: {
      main: "#bdc5aaff",
    },
    secondary: {
      main: "#FDB833",
    },
    background: {
      paper: "rgba(0,0,0,0)",
      default: "#000000",
    },
    text: {
      primary: "#bdc5aaff",
    },
  },
  typography: {
    fontFamily: ["Roboto", "Archivo Black", "sans-serif"].join(","),
    button: {
      textTransform: "none",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={PortfolioTheme}>
      <CssBaseline />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Root />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
