import { useContext } from "react"
import { LanguageContext } from "../context/languageContext/languageContext ";
import { Carousel } from "../components/Carousel";
import { useScreenMediaQuery } from "../hooks/useScreenMediaQuery";

export const HomeScreen = () => {

  const { languageRed: { about } } = useContext(LanguageContext);
  const { isMobile, isDesktop } = useScreenMediaQuery();

  const animateFadeIn = (delay: number = 2, direction: 'L' | 'R' = 'L'): string => {
    const newDirection = direction === 'L' ? 'fadeInLeft' : 'fadeInRight';
    return `animate__animated animate__${newDirection} animate__delay-${delay}s show-container`;
  };

  const headerInfoDesktop = () => {
    return (
      <div className="cotainer contenido-sobre-mi" style={{marginTop: '2rem'}}>
        <div className={`image-container ${animateFadeIn(1)} hidden-conainer`}>
          <img src={about.photo.src} alt={about.photo.name} className="image-profile"/>
        </div>
        <div className="contenido-detalle">
          <h1 className={animateFadeIn(1, 'R') + 'hidden-conainer'}>{about.name}</h1>
          <h2 className={animateFadeIn(1, 'R') + 'hidden-conainer'} style={{fontWeight: 'normal'}}>{about.job}, {about.age}</h2>
          <h4 className={animateFadeIn(1, 'R') + 'text-ligth'} style={{fontWeight: '300'}}>{about.desc[0]}</h4>
          <h4 className={animateFadeIn(2, 'R') + 'text-ligth'} style={{fontWeight: '300'}}>{about.desc[1]}</h4>
          <h4 className={animateFadeIn(3, 'R') + 'text-ligth'} style={{fontWeight: '300'}}>{about.desc[2]}</h4>
        </div>
      </div>
    )
  }

  const headerInfoMovil = () => {
    return (
      <div className={"cotainer contenido-sobre-mi-movil"} style={{marginTop: '2rem'}}>
        <div className={` ${isMobile ? 'image-container-movil' : 'image-container-tablet'} ${animateFadeIn(1)} hidden-conainer`}>
          <img src={about.photo.src} alt={about.photo.name} className="image-profile"/>
          <div className="contenido-detalle">
            <h1 className={animateFadeIn(1, 'R') + 'hidden-conainer'}>{about.name}</h1>
            <h2 className={animateFadeIn(1, 'R') + 'hidden-conainer'} style={{fontWeight: 'normal'}}>{about.job}, {about.age}</h2>
          </div>
        </div>
        <div className="contenido-detalle">
          <h4 className={animateFadeIn(1, 'R') + 'text-ligth'} style={{fontWeight: '300'}}>{about.desc[0]}</h4>
          <h4 className={animateFadeIn(2, 'R') + 'text-ligth'} style={{fontWeight: '300'}}>{about.desc[1]}</h4>
          <h4 className={animateFadeIn(3, 'R') + 'text-ligth'} style={{fontWeight: '300'}}>{about.desc[2]}</h4>
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
      <Carousel />
    </div>
    </>
  )
}
