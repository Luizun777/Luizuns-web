import { Title } from "../components/Title"
import { LanguageContext } from "../context/languageContext/languageContext ";
import { useContext } from 'react';
import { useAnimation } from "../hooks/useAnimation";
import { CardProyect } from "../components/CardProyect";

export const ProyectsScreen = () => {

  const { languageRed: { menu, projects, tooltipProjects } } = useContext(LanguageContext);
  const { animateFadeIn } = useAnimation();

  return (
    <>
    <Title title={menu[2].name!} />
    <div className={`${animateFadeIn(2)} cards`}>
      {
        projects.map((project) => <CardProyect key={project.proyectName} {...project} tooltip={tooltipProjects} />)
      }
    </div>
    </>
  )
}
