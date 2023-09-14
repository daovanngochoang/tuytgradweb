import React from 'react'
import contribute from "../assets/postImage/bq17-680x453.jpg"
import iconmain from "../assets/icon/icon-main.png"
import new1 from "../assets/postImage/bq18-680x680.jpg"
import new2 from "../assets/postImage/bq19-680x680.jpg"
import new3 from "../assets/postImage/bq20-680x680.jpg"
import "../PageStyle/News.css"
const News = () => {
  return (
    <div className='new-wrapper'>
     <div className='new-title'>
      <h1>Tin Tức</h1>
      <img src={iconmain} alt="newimage"/>
     </div>
     <div className='new-post'>
      <h2>AN TOÀN THANG MÁY CHO TRẺ NHỎ – BỐ MẸ YÊN TÂM</h2>
      <p>HÃY DẠY CHO BÉ TỰ TIN ĐI THANG MÁY MỘT CÁCH AN TOÀN Phòng những khi bé di chuyển thang máy không có người lớn đi cùng. Thang máy Atvin xây dựng bộ kỹ năng dạy trẻ đi thang máy để đảm bảo An toàn trẻ – Bố mẹ yên tâm. Hãy lưu về hướng…</p>
      <p>Phòng những khi bé di chuyển thang máy không có người lớn đi cùng. Thang máy Atvin xây dựng bộ kỹ năng dạy trẻ đi thang máy để đảm bảo An toàn trẻ – Bố mẹ yên tâm. Hãy lưu về hướng dẫn con và chia sẻ bộ kỹ năng này cho các bố mẹ khác cùng biết nhé!</p>
     </div>
     <div className='new-image'> 
      <img src={contribute} alt="img"/>
      <img src={new1} alt="img"/>
      <img src={new2} alt="img"/>
      <img src={new3} alt="img"/></div>
    </div>
  )
}

export default News
