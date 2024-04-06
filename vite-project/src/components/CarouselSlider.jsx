//import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './CarouselSlider.css';
import { BestNovels } from './Data';
//import imgGirl from './assets/defaultImage';
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black", borderRadius: "50%" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black", borderRadius: "50%" }}
      onClick={onClick}
    />
  );
}

function CarouselSlider() {
 
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    initialSlide: 0,
    /*appendDots: dots => (
      <div
        style={{
          backgroundColor: "none",
          borderRadius: "10px",
          padding: "10px",
          
        }}
      >
        <ul style={{ marginTop: "100px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width: "30px",
          color: "black",
          border: "1px black solid"
        }}
      >
        {i + 1}
      </div>
    ),*/
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  /*const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
      linkDefault: imgGirl,
    }));
  };*/

  return (
    <div className="carousel-slider">
      <Slider {...settings}>
        {BestNovels.map((item) => (
          <div className="card">
            <div className="card-top">
              <img src= {item.linkImg} alt={item.Title}/>
              <h1>{item.Author}</h1>
              <h1>{item.Title}</h1>
            </div>
            <div className="card-bottom">
              <h3>{item.price}</h3>
              <span className="category">{item.Genre}</span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CarouselSlider;

/*<img
src={
  defaultImage[item.Title] === item.Title
    ? defaultImage.linkDefault
    : item.linkImg
}
alt={item.Title}
onError={handleErrorImage}
/>*/