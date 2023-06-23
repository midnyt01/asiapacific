import banner1 from "../assets/1.png";
import banner2 from "../assets/2.png";
import banner3 from "../assets/3.png";
import banner4 from "../assets/4.png";


import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './home-banner.styled.css'

const HeroBanner = () => {
  
    const settings = {
      accessibility: true,
      arrows: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 3000,
      cssEase: "ease",
      draggable: true,
      fade: false,
      focusOnSelect: false,
      pauseOnHover: true,
      swipe: true,
      touchMove: true,
      touchThreshold: 5,
      useCSS: true,
      variableWidth: false,
      adaptiveHeight: false
    };
    
  
    return (
      <div className="hero-banner-container">
            <div className="slider-container">
              <Slider {...settings}>
                <div className="hero-img-wrapper">
                  <img src={banner1} width={100} height={100} alt="Hero banner" />
                </div>
                <div className="hero-img-wrapper">
                  <img src={banner2} width={100} height={100} alt="Hero banner" />
                </div>
                <div className="hero-img-wrapper">
                  <img src={banner3} width={100}  height={100}alt="Hero banner" />
                </div>
                <div className="hero-img-wrapper">
                  <img src={banner4} width={100}  height={100}alt="Hero banner" />
                </div>
              </Slider>
            </div>
      </div>
    );
  };
  
  export default HeroBanner;