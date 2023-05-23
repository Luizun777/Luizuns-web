import React, { createContext, useState, useEffect, useReducer } from 'react';
import { languageReducer } from './languageReducer';
import { LanguageEN, LanguageES } from '../../data/languageData';
import { language } from '../../Interfaces/languageInterface';

type LanguageContextType = {
  language: string;
  languageRed: language;
  Spanish: () => void;
  English: () => void;
};

export const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  languageRed: LanguageEN,
  Spanish: () => {},
  English: () => {},
});

type LanguageProviderProps = {
  children: React.ReactNode;
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [language, setLanguage] = useState(() => {
    const storedLanguage = localStorage.getItem('language');
    return storedLanguage || 'en';
  });

  const defaultLanguage = language === 'en' ? LanguageEN : LanguageES;

  const [languageRed, dispatch] = useReducer(languageReducer, defaultLanguage);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const Spanish = () => {
    setLanguage('es');
    dispatch({type: 'set_es-language'});
  }

  const English = () => {
    setLanguage('en');
    dispatch({type: 'set_en-language'});
  }

  const value = {
    language,
    Spanish,
    English,
    languageRed
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
