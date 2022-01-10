import { createTheme, ThemeProvider } from '@mui/material/styles';
import HomePage from './Homepage';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3C2218',
    },
  },
});

export default function App() {
  return <ThemeProvider theme={theme}><HomePage /></ThemeProvider>;
}
