import './App.css';
import Home from './pages/Home'
import { Reset } from 'styled-reset'
import {ThemeProvider } from 'styled-components'
import theme from './theme'
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Reset/>
      <Home/>
    </ThemeProvider>
  );
}

export default App;
