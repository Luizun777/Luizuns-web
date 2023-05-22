import { RoutesInterface } from "../Interfaces/navigateInterface";
import { navegateList } from "../data/navegateData";
import { BtnNavigate } from "./BtnNavigate";
import { BtnTheme } from "./BtnTheme";

export const Header = () => {
  const title: string = "💻 <Luizun`s Page />";
  const navWithName = navegateList.filter((nav: RoutesInterface) => nav.name);

  return (
    <header className="header">
      <h1 className="header__title">{title}</h1>
      <div className="header__pagination">
        {
          navWithName.map((nav: RoutesInterface) => <BtnNavigate infoBtn={nav} key={nav.path} />)
        }
        <BtnTheme />
      </div>
    </header>
  )
}
