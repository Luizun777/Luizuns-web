import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-regular-svg-icons';
import { useContext } from 'react';
import { ThemeContext } from '../context/themeContext/themeContext';

export const BtnTheme = () => {

  const { theme: { currentTheme }, setDarkTheme, setLigthTheme } = useContext(ThemeContext);

  const showIcon = () => {
    const icon = currentTheme === 'dark' ? faSun : faMoon;
    return <FontAwesomeIcon icon={icon} />
  }

  const changeTheme = () => {
    currentTheme === 'dark' ? setLigthTheme() : setDarkTheme();
  }

  return (
    <button className="button-theme" onClick={changeTheme}>
      {showIcon()}
    </button>
  )
}
