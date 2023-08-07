import { useContext } from "react";
import { Title } from "../../components/Title"
import { LanguageContext } from "../../context/languageContext/languageContext "

export const TermAndCondScreen = () => {

  const { languageRed: { MenuAppVerb: menu } } = useContext(LanguageContext);

  return (
    <div className="cotainer cotainer-experience">
      <Title title={menu[0].name ?? ''} />
    </div>
  )
}
