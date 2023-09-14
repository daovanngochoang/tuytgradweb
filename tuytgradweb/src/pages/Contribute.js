import React from 'react'
import iconmain from "../assets/icon/icon-main.png";
import "../PageStyle/Contribute.css"
import contribute from "../assets/postImage/dong-gop-cho-xa-hoi-cung-alphatech-900x360.jpg"
const Contribute = () => {
  return (
    <div className='contribute-wrapper'>
      <div className='contribute-title'>
        <h1 style={{color: "#05527e"}}>ĐÓNG GÓP XÃ HỘI</h1>
        <img src={iconmain} alt="mainicon"/>
      </div>
      <div className='contribute-post'>
        <h2>ĐÓNG GÓP CHO XÃ HỘI CÙNG ALPHATECH</h2>
        <p style={{marginTop: "1.5rem"}}>Cam kết CHO ĐI. Sự hợp tác của Quý khách hàng với Alphatech Việt Nam góp sự góp sức giúp xã hội trở nên tốt đẹp hơn. Với cam kết cho đi, mỗi sản phẩm thang máy được bán ra, chúng tôi lại trao đến cho 1 cá nhân có thể là: một trẻ em…</p>
        <img style={{marginTop: "1rem"}} src={contribute} alt="contirbute"></img>
        <p style={{marginTop: "1rem"}}>Với cam kết cho đi, mỗi sản phẩm thang máy được bán ra, chúng tôi lại trao đến cho 1 cá nhân có thể là: một trẻ em không được đến trường được đến trường; một em bé ốm đau mà hoàn cảnh khó khăn; một món quà cho người già cô đơn không nơi nương tựa; hay góp phần vào những hoạt động bảo vệ môi trường xanh, sạch, đẹp hơn.  Vì những ngôi nhà thông minh, “Thang máy” đã trở thành một niềm đam mê với chúng tôi. Chính vì vậy, chúng tôi muốn biến đam mê đó cùng với khách hàng của mình trở thành những con người có ích cho xã hội. Cam kết “cho đi”  là nguyên tắc và tinh thần nhận 1 cho 1 của mỗi con người Alphatech Việt Nam. Khách hàng đã góp sức mình vào cho một xã hội tốt đẹp hơn, văn minh hơn, trở thành những cá nhân có giá trị cho xã hội.  Alphatech Việt Nam tự hào vì phụng sự bạn. Một con người có trái tim nhân văn.</p>
      </div>
    </div>
  )
}

export default Contribute
