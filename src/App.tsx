import './App.css';
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import Root from './routes/root';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

const PortfolioTheme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF'
    },
    background: {
      paper: "rgba(0,0,0,0)",
      default: "#000000"
    },
    text: {
      primary: "#FFFFFF"
    }
  },
  typography: {
    button: {
      textTransform: 'none'
    }
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
