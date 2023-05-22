import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider as CustomThemeProvider } from './context/themeContext/themeContext';
import './App.css';
import { AppRouter } from './Router/AppRouter';

const mainContainerStyle: React.CSSProperties = {
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
};

const App: React.FC = () => {
  return (
    <CustomThemeProvider>
      <BrowserRouter>
      <div style={mainContainerStyle} className='container'>
        <AppRouter />
      </div>
      </BrowserRouter>
    </CustomThemeProvider>
  );
};

export default App;