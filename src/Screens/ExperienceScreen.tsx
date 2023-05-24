import { useContext } from "react";
import { LanguageContext } from "../context/languageContext/languageContext ";
import { useAnimation } from "../hooks/useAnimation";
import { LetterExp } from "../components/LetterExp";
import { Experience } from "../Interfaces/languageInterface";

export const ExperienceScreen = () => {

  const { animateFadeIn } = useAnimation();
  const { languageRed: { menu, experiences } } = useContext(LanguageContext);

  return (
    <>
    <div className="cotainer cotainer-experience">
      <h1 className={animateFadeIn(1, 'L')} style={{fontSize: '3rem'}}>{menu[1].name}</h1>
      <div className={`${animateFadeIn(2, 'U')} cotainer-center`}>
        <div className="contenido-exp">
          {
            experiences.map((experience: Experience) => <LetterExp key={experience.company}  {...experience} />)
          }
        </div>
      </div>
    </div>
    </>
  )
}
