import { HomeScreen } from './Screens/HomeScreen'
import { ThemeProvider as CustomThemeProvider } from './context/themeContext/themeContext';
import './App.css';

const mainContainerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
};

const App: React.FC = () => {
  return (
    <CustomThemeProvider>
      <div style={mainContainerStyle}>
        <h1>React Theme Switcher</h1>
        <HomeScreen />
      </div>
    </CustomThemeProvider>
  );
};

export default App;