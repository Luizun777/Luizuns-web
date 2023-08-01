import { Title } from "../../components/Title";
import { LanguageContext } from "../../context/languageContext/languageContext ";
import { useContext } from 'react';

export const AboutWebScreen = () => {

  const { languageRed: { menu } } = useContext(LanguageContext);

  return (
    <>
    <Title title={menu[4].name!} />
    </>
  )
}
