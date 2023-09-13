import React from "react";
import { Slide  } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Slider1 from "../../assets/postImage/image-23.jpg";
import Slider2 from "../../assets/postImage/image-24.jpg";
import Slider3 from "../../assets/postImage/image-25.jpg";
import Slider4 from "../../assets/postImage/image-27.jpg";
import prevArrow from "../../assets/icon/icon-left.png";
import nextArrow from "../../assets/icon/icon-right.png";
import "./style.css";

const slideImages = [
  {
    url: Slider1,
  },
  {
    url: Slider2,
  },
  {
    url: Slider3,
  },
  {
    url: Slider4,
  },

];
const buttonStyle = {
  width: "5px",
  background: "none",
  border: "0px",
  padding: "3rem",
};
const properties = {
  prevArrow: (
    <button style={{ ...buttonStyle }}>
      <img src={prevArrow} alt="prev" />
    </button>
  ),
  nextArrow: (
    <button style={{ ...buttonStyle }}>
      <img src={nextArrow} alt="next" />
    </button>
  ),
};

const SliderBottom = () => {
  return (
    <div className="images-slider-wrapper">
      <Slide {...properties}>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              style={{ backgroundImage: `url(${slideImage.url})` }}
              className="slide-div"
            >
              <p className="slide-title">
                <span className="slide-title-span-title">
                  {slideImage.title}
                </span>
                <span className="slide-title-span-subtitle">
                  {slideImage.subtitle}
                </span>
              </p>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default SliderBottom;
