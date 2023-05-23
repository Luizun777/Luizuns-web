import { RoutesInterface } from "../Interfaces/navigateInterface";
import { LanguageContext } from "../context/languageContext/languageContext ";
import { useAnimation } from "../hooks/useAnimation";
import { useScreenMediaQuery } from "../hooks/useScreenMediaQuery";
import { BtnLanguage } from "./BtnLanguage";
import { BtnNavigate } from "./BtnNavigate";
import { BtnTheme } from "./BtnTheme";
import { useContext } from 'react';

export const Header = () => {

  const { languageRed: { menu } } = useContext(LanguageContext);
  const { isDesktop } = useScreenMediaQuery();
  const { animateFadeIn } = useAnimation();

  const title: string = "💻 <Luizun`s Page />";

  return (
    <>
    <header className={`${isDesktop ? 'header' : 'header-movile'} ${animateFadeIn(1, 'D')} `}>
      <h1 className="header__title">{title}</h1>
      <div className="header__pagination">
        {
          menu.map((nav: RoutesInterface) => <BtnNavigate infoBtn={nav} key={nav.path} />)
        }
        {
          isDesktop && (
            <>
            <BtnTheme /> <BtnLanguage />
            </>
          )
        }
      </div>
      {
          !isDesktop && (
            <div className="header__pagination">
              <BtnTheme />
              <BtnLanguage />
            </div>
          )
        }
    </header>
    </>
  )
}
