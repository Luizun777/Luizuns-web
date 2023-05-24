import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { ImagesInterface } from "../Interfaces/ImagesInterface"
import { carouselData } from "../data/imageData"
import { useScreenMediaQuery } from '../hooks/useScreenMediaQuery';
import { useAnimation } from '../hooks/useAnimation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { LanguageContext } from '../context/languageContext/languageContext ';
import { useContext } from 'react';

export const Carousel = () => {

  const { isMobile, isDesktop, isTablet } = useScreenMediaQuery();
  const { animateFadeIn } = useAnimation();
  const { languageRed: { technologiesText } } = useContext(LanguageContext);

  const slidesToShow = () => {
    if (isMobile) return 2;
    if (isTablet) return 3;
    if (isDesktop) return 4;
    return 2;
  }

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: slidesToShow(),
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 500,
    cssEase: "linear"
  };

  return (
    <>
    <h1 className={`${animateFadeIn(2, 'L')} animated-element.show`}>
      <FontAwesomeIcon icon={faCode} className='icon-list' />
      <span style={{fontWeight: 'normal', marginLeft: 10}}>{technologiesText}</span>
    </h1>
    <div className={`${animateFadeIn(2, 'R')} carousel`}>
      <Slider {...settings}>
        {
          carouselData.map((image: ImagesInterface) => (
            <div className="carousel-slide" key={image.name}>
              <img src={image.src} alt={image.name} style={{width: '75%', height: 200}}/>
            </div>
          ))
        }
      </Slider>
    </div>
    <div  style={{height: 100}}></div>
    </>
  )
}
