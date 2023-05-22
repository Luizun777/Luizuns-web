import { RoutesInterface } from "../Interfaces/navigateInterface";
import { navegateList } from "../data/navegateData";
import { BtnNavigate } from "./BtnNavigate";
import { BtnTheme } from "./BtnTheme";

export const Header = () => {
  const subTitle: string = '<Developer />';
  const navWithName = navegateList.filter((nav: RoutesInterface) => nav.name);

  return (
    <header className="header">
      <div className="title__container">
        <h1 className="header__title">💻 Luizun's Page</h1>
        <h2 className="header__sub__title">{subTitle}</h2>
      </div>
      <div className="header__pagination">
        {
          navWithName.map((nav: RoutesInterface) => <BtnNavigate infoBtn={nav} key={nav.path} />)
        }
        <BtnTheme />
      </div>
    </header>
  )
}
