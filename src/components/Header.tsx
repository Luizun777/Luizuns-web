import { useLocation } from "react-router-dom";
import { RoutesInterface, TypeMenuInterface } from "../Interfaces/navigateInterface";
import { LanguageContext } from "../context/languageContext/languageContext ";
import { useAnimation } from "../hooks/useAnimation";
import { useScreenMediaQuery } from "../hooks/useScreenMediaQuery";
import { BtnLanguage } from "./BtnLanguage";
import { BtnNavigate } from "./BtnNavigate";
import { BtnTheme } from "./BtnTheme";
import { useContext, useEffect, useState } from 'react';
import { typeMenuList } from "../data/navegateData";

export const Header = () => {

  const [menuActual, setMenuActual] = useState<RoutesInterface[]>([]);
  const [name, setName] = useState<string>('');
  const { pathname } = useLocation();
  const { languageRed: { menu, MenuAppVerb } } = useContext(LanguageContext);
  const { isDesktop } = useScreenMediaQuery();
  const { animateFadeIn } = useAnimation();

  useEffect(() => {
    const menuFound = typeMenuList.find(
      ({ path }: TypeMenuInterface) => pathname.toLowerCase().includes(path)
    ) as TypeMenuInterface;
    const { title, name, path } = menuFound ?? typeMenuList[0];
    document.title = title;
    setName(name);

    switch (path) {
      case 'verb-quest':
        setMenuActual(MenuAppVerb);
        break;
      default:
        setMenuActual(menu);
        break;
    }
  }, [location.pathname, menu, MenuAppVerb]);

  return (
    <>
      <header className={`${isDesktop ? 'header' : 'header-movile'} ${animateFadeIn(1, 'D')} `}>
        <h1 className="header__title">{name}</h1>
        <div className="header__pagination">
          {
            menuActual.map((nav: RoutesInterface) => <BtnNavigate infoBtn={nav} key={nav.path} />)
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
