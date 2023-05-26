import { useContext } from "react"
import { LanguageContext } from "../context/languageContext/languageContext ";
import { Carousel } from "../components/Carousel";
import { useScreenMediaQuery } from "../hooks/useScreenMediaQuery";
import { useAnimation } from "../hooks/useAnimation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { ListWhitIcon } from "../components/ListWhitIcon";

export const HomeScreen = () => {

  const { languageRed: { about, skils, skillsText } } = useContext(LanguageContext);
  const { isMobile, isDesktop } = useScreenMediaQuery();
  const { animateFadeIn } = useAnimation();

  const headerInfoDesktop = () => {
    return (
      <div className="cotainer contenido-sobre-mi" style={{marginTop: '2rem'}}>
        <div className={`image-container ${animateFadeIn(1, 'L')} show-container`}>
          <img src={about.photo.src} alt={about.photo.name} className="image-profile"/>
        </div>
        <div className="contenido-detalle">
          <h1 className={animateFadeIn(1, 'R')}>{about.name}</h1>
          <h2 className={`text-secondary ${animateFadeIn(1, 'R')}`} style={{fontWeight: 'normal'}}>{about.job}, {about.age}</h2>
          <h3 className={animateFadeIn(1, 'R')} style={{fontWeight: '300'}}>{about.desc[0]}</h3>
          <h3 className={animateFadeIn(2, 'R')} style={{fontWeight: '300'}}>{about.desc[1]}</h3>
          <h3 className={animateFadeIn(3, 'R')} style={{fontWeight: '300'}}>{about.desc[2]}</h3>
        </div>
      </div>
    )
  }

  const headerInfoMovil = () => {
    return (
      <div className={"cotainer contenido-sobre-mi-movil"} style={{marginTop: '2rem'}}>
        <div className={` ${isMobile ? 'image-container-movil' : 'image-container-tablet'} ${animateFadeIn(1, 'L')} hidden-conainer`}>
          <img src={about.photo.src} alt={about.photo.name} className="image-profile"/>
          <div className="contenido-detalle">
            <h2 className={animateFadeIn(1, 'R')}>{about.name}</h2>
            <h2 className={`text-secondary ${animateFadeIn(1, 'R')}`} style={{fontWeight: 'normal'}}>{about.job}, {about.age}</h2>
          </div>
        </div>
        <div className="contenido-detalle">
          <h4 className={animateFadeIn(1, 'R')} style={{fontWeight: '300'}}>{about.desc[0]}</h4>
          <h4 className={animateFadeIn(2, 'R')} style={{fontWeight: '300'}}>{about.desc[1]}</h4>
          <h4 className={animateFadeIn(3, 'R')} style={{fontWeight: '300'}}>{about.desc[2]}</h4>
        </div>
      </div>
    )
  }

  return (
    <>
    {
      isDesktop ? headerInfoDesktop() : headerInfoMovil()
    }
    <div className="cotainer">
      <h1 className={`${animateFadeIn(2, 'L')} animated-element.show`}>
        <FontAwesomeIcon icon={faCode} className="icon-list" />
        <span style={{fontWeight: 'normal', marginLeft: 10}}>{skillsText}</span>
      </h1>
      <div className={`${animateFadeIn(2, 'U')} lista-skils-home`}>
        {
          skils.map((activitie: string) => <ListWhitIcon text={activitie} key={activitie} />)
        }
      </div>
    </div>
    <div className="cotainer">
      <Carousel />
    </div>
    </>
  )
}
