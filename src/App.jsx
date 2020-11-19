import { ThemeProvider } from 'styled-components';
import './App.css';
import Header from './components/Header';
import usePersistedState from './hooks/usePersistedState';
import GlobalStyles from './styles/globalStyles';
import Light from './styles/theme/light';
import Dark from './styles/theme/dark';
import Footer from './components/Footer';

function App() {

  const [theme,setTheme] = usePersistedState('theme',Light);

  const toggleTheme = () => {
    setTheme(theme.title === 'Light' ? Dark : Light);
  }

  return (

    <ThemeProvider theme={theme}>
    <div className="App">
      <GlobalStyles/>
      <Header toggleTheme={toggleTheme}/>

      <Footer/>
    </div>
    </ThemeProvider>
  );
}

export default App;
