import React, {useState} from 'react'
import ProductCard from "../components/productCard";
import ProductData from "../FakeData/ProductData";
import iconmain from "../assets/icon/icon-main.png";
import "../PageStyle/Product.css"
import SliderBottom from '../components/SliderBottom';
const Product = () => {
  const [products, SetProduct] = useState(ProductData);
  return (
    <div className='product'>
       <div className="product-title">
        <span>Sản phẩm</span>
        <img src={iconmain} alt="mainicon" className="product-title-icon" />
      </div>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard title={product.title} cover_image={product.coverImage} />
        ))}
      </div>
      <SliderBottom/>
    </div>
  )
}

export default Product
