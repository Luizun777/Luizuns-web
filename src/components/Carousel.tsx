import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { ImagesInterface } from "../Interfaces/ImagesInterface"
import { carouselData } from "../data/imageData"
import { useScreenMediaQuery } from '../hooks/useScreenMediaQuery';

export const Carousel = () => {

  const { isMobile, isDesktop, isTablet } = useScreenMediaQuery();

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
    <div className="carousel">
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
  )
}
