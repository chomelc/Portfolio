import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
