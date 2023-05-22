import { useContext } from "react"
import { LanguageContext } from "../context/languageContext/languageContext ";

export const HomeScreen = () => {

  const { languageReduce: language } = useContext(LanguageContext);

  return (
    <>
    <div className="cotainer">
      <img src={language.photo.src} alt={language.photo.name} width={200}  height={200}/>
      <h1>{language.name}</h1>
      <h2>{language.job}</h2>
      <h3>{language.age}</h3>
      <h4>{language.desc}</h4>
    </div>
    </>
  )
}
