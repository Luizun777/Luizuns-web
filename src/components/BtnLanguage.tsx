import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { LanguageContext } from '../context/languageContext/languageContext ';

export const BtnLanguage = () => {

  const { language, English, Spanish } = useContext(LanguageContext);

  const changeLanguage = () => {
    language === 'en' ? Spanish() : English();
  }

  return (
    <button className="button-theme" onClick={changeLanguage}>
      <FontAwesomeIcon icon={faLanguage} />
    </button>
  )
}
