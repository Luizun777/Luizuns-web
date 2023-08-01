import { Title } from "../../components/Title"
import { useAnimation } from "../../hooks/useAnimation";
import verbQuest from '../../assets/proyectos/verb-quest.jfif';

export const AppVerbsScreen = () => {

  const { animateFadeIn } = useAnimation();

  return (
    <div className="cotainer cotainer-experience">
      <Title title={'About'} />
      <div className="app-container">
        <div className="app-screenshot">
        <img src={verbQuest} alt="Captura de la App" />
        </div>
        <div className="app-description">
          <h2>Nombre de la App</h2>
          <p>La funcionalidad de tu app se centra en la práctica de la conjugación de verbos en inglés. Los usuarios pueden utilizar la aplicación para mejorar sus habilidades lingüísticas al trabajar con diferentes verbos y tiempos verbales. La app puede proporcionar ejercicios interactivos y variados que permitan a los usuarios practicar la conjugación en contextos diversos. Además, es posible que incluya características como seguimiento del progreso, retroalimentación en tiempo real, puntajes y posiblemente una base de datos de verbos para ofrecer una experiencia educativa completa y efectiva.</p>
        </div>
      </div>
      {/* <div className={`${animateFadeIn(2, 'U')} cotainer-center`}>
        <div className="app-container">
          <div className="app-screenshot">
            <img src={verbQuest} alt="Captura de la App" />
          </div>
          <div className="app-description">
            <h2>Nombre de la App</h2>
            <p>La funcionalidad de tu app se centra en la práctica de la conjugación de verbos en inglés. Los usuarios pueden utilizar la aplicación para mejorar sus habilidades lingüísticas al trabajar con diferentes verbos y tiempos verbales. La app puede proporcionar ejercicios interactivos y variados que permitan a los usuarios practicar la conjugación en contextos diversos. Además, es posible que incluya características como seguimiento del progreso, retroalimentación en tiempo real, puntajes y posiblemente una base de datos de verbos para ofrecer una experiencia educativa completa y efectiva.</p>
          </div>
        </div>
      </div> */}
    </div>
  )
}
