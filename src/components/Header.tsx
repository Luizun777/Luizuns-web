import { RoutesInterface } from "../Interfaces/navigateInterface";
import { LanguageContext } from "../context/languageContext/languageContext ";
import { BtnLanguage } from "./BtnLanguage";
import { BtnNavigate } from "./BtnNavigate";
import { BtnTheme } from "./BtnTheme";
import { useContext } from 'react';

export const Header = () => {

  const { languageRed: { menu } } = useContext(LanguageContext);

  const title: string = "💻 <Luizun`s Page />";

  return (
    <header className="header animate__animated animate__fadeIn">
      <h1 className="header__title">{title}</h1>
      <div className="header__pagination">
        {
          menu.map((nav: RoutesInterface) => <BtnNavigate infoBtn={nav} key={nav.path} />)
        }
        <BtnTheme />
        <BtnLanguage />
      </div>
    </header>
  )
}
