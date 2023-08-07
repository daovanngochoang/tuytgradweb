import React from 'react'
import ProductCard from '../components/productCard'
import dongCoThangMay from '../assets/productImages/DongCoThangMay/linh-kien-san-pham_dong_co-thang-may-680x510.jpg'
import BaogiaComponent from '../components/baogiaComponent'
import NoNameCard from '../components/nonameCardComponent'
import ImageSlider from '../components/imageSlider'
import icon from '../assets/icon_bigz1.png'


const Home = () => {
  return (
    <div>
      <ImageSlider/>
      <ProductCard title='Động cơ thang máy' image={dongCoThangMay} />
      <BaogiaComponent />
      <NoNameCard icon={icon} title={"CHI NHÁNH ALPHATECH"} subtitle={"Liên hệ với các chi nhánh của chúng tôi"} />

    </div>
  )
}

export default Home
