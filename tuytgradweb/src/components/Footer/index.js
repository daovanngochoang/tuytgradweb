import React from 'react'
import './style.css'
import { Divider } from 'antd';
import footerLogo from '../../assets/logo/_dmca_premi_badge_2.png';
import thongbao from '../../assets/logo/Thong-bao-BCT.png'

import facebook from '../../assets/socialMedia/facebook.png'
import google from '../../assets/socialMedia/search.png'
import pinterest from '../../assets/socialMedia/pinterest.png'
import youtube from '../../assets/socialMedia/youtube.png'


import icon1 from '../../assets/icon/footer-icons/icon3.png';
import icon2 from '../../assets/icon/footer-icons/icon3.png';
import icon3 from '../../assets/icon/footer-icons/icon3.png';
import icon4 from '../../assets/icon/footer-icons/icon3.png';



const Footer = () => {
  return (
    <>
      <div className='contact-container'>
        <div className='contact-content'>

          <div className='left-contact-container'>

            <div className='call-us'>
              <h1>Gọi cho chúng tôi</h1>

              <div className='call-us-child'>
                <div className='contact-container-child'>
                  <li>Tư vấn về Sản phẩm</li>
                  <Divider className='divider-contact' />
                  <h1 className='contact-phone-number'>0981 15 9898</h1>
                  <li> 8h00 - 22h00</li>
                </div>
                <div className='contact-container-child'>
                  <li>Tư vấn về Dịch vụ</li>
                  <Divider className='divider-contact' />

                  <h1 className='contact-phone-number' >0933 26 9898</h1>
                  <li>0h00 - 24h00 - 24/7</li>
                </div>
              </div>
            </div>


          </div>
          <div className='right-contact-container'>
            <h1>Đăng ký nhận báo giá và ưu đãi</h1>

            <div className='input-register'>
              <div className='input-and-button'>
                <input className='input-field' type="text" id="inputField" name="name" placeholder="Địa chỉ email của bạn..." />
              </div>
              <div className='input-and-button'>
                <input className='input-field' type="text" id="inputField" name="name" placeholder="Số điện thoại ..." />
                <button class="send-button" >Gửi đi</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='footer-list'>

        <div className='footer-list-content'>
          <ul>
            <li>
              <div className='footer-icon-list-container'>
                <img src={icon1} className='footer-icon-list' />
                <p>VỀ ALPHATECH VIỆT NAM</p>
              </div>
            </li>
            <li><a href="#">Giới thiệu</a></li>
            <li><a href="#">Hồ sơ năng lực</a></li>
            <li><a href="#">Tiêu chuẩn dùng người</a></li>
            <li><a href="#">Lợi ích đầu tư</a></li>
            <li><a href="#">Giải pháp thiết kế</a></li>
            <li><a href="#">Tin tuyển dụng</a></li>
          </ul>

          <ul>
            <li>
              <div className='footer-icon-list-container'>
                <img src={icon2} className='footer-icon-list' />
                <p>VỀ SẢN PHẨM</p>
              </div>
            </li>
            <li><a href="#">Thang máy Atvin</a></li>
            <li><a href="#">Thang máy gia đình</a></li>
            <li><a href="#">Thang máy Tashi</a></li>
            <li><a href="#">Thang máy lồng kính</a></li>
            <li><a href="#">Thang cuốn</a></li>
            <li><a href="#">Thang máy tải hàng</a></li>
          </ul>


          <ul>
            <li>
              <div className='footer-icon-list-container'>
                <img src={icon3} className='footer-icon-list' />

                <p>VỀ DỊCH VỤ</p>
              </div>
            </li>

            <li><a href="#">Lắp đặt – Vận hành</a></li>
            <li><a href="#">Bảo hành</a></li>
            <li><a href="#">Bảo trì bảo dưỡng</a></li>
            <li><a href="#">Sửa chữa thang máy</a></li>
            <li><a href="#">Chăm sóc khách hàng</a></li>
            <li><a href="#">Linh kiện thiết bị</a></li>
          </ul>

          <ul>
            <li>
              <div className='footer-icon-list-container'>
                <img src={icon4} className='footer-icon-list' />

                <p>CHÚNG TÔI CÓ THỂ GIÚP BẠN</p>
              </div>
            </li>
            <li><a href="#">Hỏi đáp</a></li>
            <li><a href="#">Kinh nghiệm lựa chọn</a></li>
            <li><a href="#">Chính sách và quy định chung</a></li>
            <li><a href="#">Chính sách thanh toán</a></li>
            <li><a href="#">Chính sách bảo hành</a></li>
            <li><a href="#">Chính sách bảo mật thông tin</a></li>
            <li><a href="#">Quy trình xử lý khiếu nại</a></li>
            <li><a href="#">Chính sách vận chuyển</a></li>
          </ul>
        </div>

      </div >

      <div className='addresss'>

        <div className='address-containter'>
          <div className='company-info'>
            <div className='logo-info'>
              <img src={footerLogo} alt='' className='cmp-logo' />
              <div className='infomation'>
                <li>
                  <p>Công ty cổ phần Alphatech Việt Nam. </p>
                  <p>Người đại diện: Huỳnh Anh Hùng </p>
                  <p>Địa chỉ: Lô 1C4/NO, Khu đô thị Nam Trung Yên, P. Trung Hòa, Q. Cầu Giấy, Hà Nội </p>
                  <p>Số điện thoại: 04 7302 9889 - Email: contact@atvin.com.vn </p>
                </li>
              </div>
            </div>
            <p>Mã số thuế: 0104374708 - Ngày cấp: 13/01/2010</p>
          </div>
          <img src={thongbao} alt='' className='thongbao' />

          <div className='social-media'>
            <img src={facebook} className='social-media-icon' />
            <img src={google} className='social-media-icon' />
            <img src={youtube} className='social-media-icon' />
            <img src={pinterest} className='social-media-icon' />
          </div>
        </div>



      </div>

    </>

  )


}

export default Footer;


