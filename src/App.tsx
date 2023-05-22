import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider as CustomThemeProvider } from './context/themeContext/themeContext';
import './App.css';
import { AppRouter } from './Router/AppRouter';
import { LanguageProvider } from './context/languageContext/languageContext ';

const mainContainerStyle: React.CSSProperties = {
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
};

const App: React.FC = () => {
  return (
    <CustomThemeProvider>
      <LanguageProvider>
        <BrowserRouter>
        <div style={mainContainerStyle} className='container'>
          <AppRouter />
        </div>
        </BrowserRouter>
      </LanguageProvider>
    </CustomThemeProvider>
  );
};

export default App;