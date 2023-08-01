import React from 'react'
import './style.css'
import { Divider } from 'antd';

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
                <button class="send-button" type="submit">Gửi đi</button>
              </div>

            </div>

          </div>

        </div>
      </div>
      <div className='footer-list'>

        <div className='footer-list-content'>
          <ul>
            <li>
              <p><span className="icon1">VỀ ALPHATECH VIỆT NAM</span></p>
              <a href="#">Giới thiệu</a>
              <a href="#">Hồ sơ năng lực</a>
              <a href="#">Tiêu chuẩn dùng người</a>
              <a href="#">Lợi ích đầu tư</a>
              <a href="#">Giải pháp thiết kế</a>
              <a href="#">Tin tuyển dụng</a>
            </li>
            <li>
              <p><span className="icon2">VỀ SẢN PHẨM</span></p>
              <a href="#">Thang máy Atvin</a>
              <a href="#">Thang máy gia đình</a>
              <a href="#">Thang máy Tashi</a>
              <a href="#">Thang máy lồng kính</a>
              <a href="#">Thang cuốn</a>
              <a href="#">Thang máy tải hàng</a>
            </li>
            <li>
              <p><span className="icon3">VỀ DỊCH VỤ</span></p>
              <a href="#">Lắp đặt – Vận hành</a>
              <a href="#">Bảo hành</a>
              <a href="#">Bảo trì bảo dưỡng</a>
              <a href="#">Sửa chữa thang máy</a>
              <a href="#">Chăm sóc khách hàng</a>
              <a href="#">Linh kiện thiết bị</a>
            </li>
            <li>
              <p><span className="icon4">CHÚNG TÔI CÓ THỂ GIÚP BẠN</span></p>
              <a href="#">Hỏi đáp</a>
              <a href="#">Kinh nghiệm lựa chọn</a>
              <a href="#">Chính sách và quy định chung</a>
              <a href="#">Chính sách thanh toán</a>
              <a href="#">Chính sách bảo hành</a>
              <a href="#">Chính sách bảo mật thông tin</a>
              <a href="#">Quy trình xử lý khiếu nại</a>
              <a href="#">Chính sách vận chuyển</a>
            </li>
          </ul>
        </div>

      </div>

      {/* <div className='addresss'>
        <div className='company-info'>
          <div className='logo-info'>
            <img src='' alt='' className='cmp-logo' />
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

        <img src='/src/assets/logo/Thong-bao-BCT.png' />

        <div className='social-media'>

        </div>

      </div> */}

    </>

  )


}

export default Footer;


