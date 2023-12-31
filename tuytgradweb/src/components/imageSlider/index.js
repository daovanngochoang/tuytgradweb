import React from 'react'
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Slider1 from "../../assets/slider/slider-1.jpg";
import Slider2 from "../../assets/slider/slider-2.jpg";
import Slider3 from "../../assets/slider/slider-3.jpg";
import Slider4 from "../../assets/slider/slider-4.jpg";
import Slider5 from "../../assets/slider/slider-5.jpg";
import prevArrow from "../../assets/icon/icon-left.png";
import nextArrow from "../../assets/icon/icon-right.png";
import "./style.css"

const slideImages = [
    {
      url: Slider1,
      subtitle: "Đáng Tin cậy nhất",
      title: "Là Hãng Thang Máy"
    },
    {
      url: Slider2,
      subtitle: "Giải pháp thiết kế thang máy cho gia đình",
      title: "E-HOME"
    },
    {
        url: Slider3,
        subtitle: "Giải pháp thiết kế thang máy cho Khách sạn",
        title: "E-HOTEL"
      },
      {
        url: Slider4,
        subtitle: "Giải pháp thiết kế thang máy cho nhà cải tạo",
        title: "E-IMPRO"
      },
      {
        url: Slider5,
        subtitle: "Giải pháp thiết kế thang máy cho Văn phòng",
        title: "E-OFFICE"
      },
  ];
  const buttonStyle = {
    width: "35px",
    background: 'none',
    border: '0px',
    padding: '11rem'
   
};
  const properties ={
    prevArrow: <button style={{ ...buttonStyle }}><img src={prevArrow} alt="prev"/></button>,
    nextArrow: <button style={{ ...buttonStyle }}><img src={nextArrow} alt="next"/></button>
  }

const ImageSlider = () => {
  return (
    <div className='images-slider-wrapper'>
      <Fade {...properties}>
      {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              style={{ backgroundImage: `url(${slideImage.url})` }}
              className="slide-div"
            >
              <p className='slide-title'>
                <span className='slide-title-span-title'>{slideImage.title}</span>
                <span  className='slide-title-span-subtitle'>
                  {slideImage.subtitle}
                </span>
              </p>
            </div>
          </div>
        ))}
      </Fade>
    </div>
  )
}

export default ImageSlider



