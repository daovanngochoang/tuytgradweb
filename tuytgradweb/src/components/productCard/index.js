import React from 'react';
import "./style.css";
import { Link } from "react-router-dom";
import icon from "../../assets/icon/icon-right.png";

const ProductCard = ({ title, cover_image, width, height }) => {
  const cardStyle = {
    width: width,
    height: height
  };

  const imageStyle = {
    width: width,
    height: height
  };

  return (
    <div className="product-card-container" style={cardStyle}>
      <img src={cover_image} className="product-card-image" style={imageStyle} alt="anh" />

      <div className="product-card-link">
        <span>{title}</span>
        <i className="arrow right" />
      </div>
    </div>
  );
};

export default ProductCard;
