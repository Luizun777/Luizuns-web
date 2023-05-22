import { useContext } from "react"
import { LanguageContext } from "../context/languageContext/languageContext ";

export const HomeScreen = () => {

  const { languageReduce: language } = useContext(LanguageContext);

  const animateFadeIn = (delay: number = 2): string => {
    return `animate__animated animate__fadeInLeft animate__delay-${delay}s`;
  };

  return (
    <>
    <div className="cotainer">
      <div className={`image-container ${animateFadeIn(1)}`}>
        <img src={language.photo.src} alt={language.photo.name} width={200} height={200}/>
      </div>
      <h1 className={animateFadeIn(1)}>{language.name}</h1>
      <h2 className={animateFadeIn(2)}>{language.job}</h2>
      <h3 className={animateFadeIn(2)}>{language.age}</h3>
      <h4 className={animateFadeIn(3)}>{language.desc}</h4>
    </div>
    </>
  )
}
