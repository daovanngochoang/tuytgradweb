import React, { useState } from "react";
import ProductCard from "../components/productCard";
import ImageSlider from "../components/imageSlider";
import ProductData from "../FakeData/ProductData";
import "../PageStyle/Home.css";
import iconmain from "../assets/icon/icon-main.png";
import PostData from "../FakeData/PostData";
import SliderBottom from "../components/SliderBottom";

const Home = () => {
  const [products, SetProduct] = useState(ProductData);
  const [posts, SetPost] = useState(PostData);
  console.log(products);
  return (
    <div className="home">
      <ImageSlider />
      <div className="home-title">
        <span>Thiết bị thang máy</span>
        <img src={iconmain} alt="mainicon" className="home-title-icon" />
      </div>
      <div className="home-product">
        {products.map((product) => (
          <ProductCard title={product.title} cover_image={product.coverImage} />
        ))}
      </div>
      <div className="home-title">
        <span>Lợi ích đầu tư</span>
        <img src={iconmain} alt="mainicon" className="home-title-icon" />
      </div>
      <div className="home-post">
        {
          posts.map((post) => (
            <ProductCard title={post.title} cover_image={post.coverImage} width= "350px" height="350px"/>
          ))
        }
      </div>
      <div className="home-title">
        <span>Trải nghiệm sự khác biệt</span>
        <p>Cùng thang máy ATVIN</p>
        <img src={iconmain} alt="mainicon" className="home-title-icon" />
      </div>
      <SliderBottom/>
    </div>
  );
};

export default Home;
