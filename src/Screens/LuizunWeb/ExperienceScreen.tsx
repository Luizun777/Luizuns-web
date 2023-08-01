import { useContext } from "react";
import { LanguageContext } from "../../context/languageContext/languageContext ";
import { useAnimation } from "../../hooks/useAnimation";
import { LetterExp } from "../../components/LetterExp";
import { Experience } from "../../Interfaces/languageInterface";
import { Title } from "../../components/Title";

export const ExperienceScreen = () => {

  const { animateFadeIn } = useAnimation();
  const { languageRed: { menu, experiences } } = useContext(LanguageContext);

  return (
    <>
    <div className="cotainer cotainer-experience">
      <Title title={menu[1].name!} />
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
