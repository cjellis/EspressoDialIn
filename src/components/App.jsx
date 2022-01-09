import { createTheme, ThemeProvider } from '@mui/material/styles';
import HomePage from './Homepage';

const theme = createTheme();

export default function App() {
  return <ThemeProvider theme={theme}><HomePage /></ThemeProvider>;
}
