import React, { createContext, useEffect, useReducer } from 'react';
import { ThemeReducer, darkTheme, ThemeState, LigthTheme } from './themeReducer';
import './../../App.css';

interface ThemeContextProps {
  theme: ThemeState;
  setLigthTheme: () => void;
  setDarkTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: darkTheme,
  setLigthTheme: () => {},
  setDarkTheme: () => {},
});

export const ThemeProvider: React.FC = ({ children }: any) => {

  const themeStorage = localStorage.getItem('theme') === 'dark' ? darkTheme : LigthTheme;

  const [theme, dispatch] = useReducer(ThemeReducer, themeStorage);

  useEffect(() => {
    console.log(theme);
    console.log(document.documentElement.classList);
    
    if (theme === darkTheme) {
      localStorage.setItem('theme', 'dark');
      document.body.setAttribute('data-theme', theme.currentTheme);
    } else {
      localStorage.setItem('theme', 'light');
      document.body.setAttribute('data-theme', theme.currentTheme);
    }
  }, [theme]);

  const setLigthTheme = () => {
    dispatch({type: 'set_ligth-theme'});
  }

  const setDarkTheme = () => {
    dispatch({type: 'set_dark-theme'});
  }

  return (
    <ThemeContext.Provider value={{ theme, setLigthTheme, setDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
