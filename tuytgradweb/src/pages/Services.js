import React from 'react'
import "../PageStyle/Services.css"
import iconmain from "../assets/icon/icon-main.png";
import servicesimg from "../assets/postImage/sửa-chữa-thang-máy-tại-Hà-Nội.jpg"
const Services = () => {
  return (
    <div className='services-wrapper'>
      <div className='services-title'>
        <h1>Dịch Vụ</h1>
        <img src={iconmain} alt="mainicon"/>
      </div>
      <div className='services-post'>
        <h2>DỊCH VỤ SỬA CHỮA THANG MÁY TẠI HÀ NỘI</h2>
        <p>Thang máy gia đình là một thiết bị công nghệ hiện đại giúp con người, hàng hóa có thể di chuyển lên xuống một cách đơn giản, dễ dàng trong các tòa nhà cao tầng. Tuy nhiên nếu thang hỏng, thường xuyên gặp sự cố khiến bạn cảm thấy khó chịu, không yên tâm về…</p>
        <p>Thang máy gia đình là một thiết bị công nghệ hiện đại giúp con người, hàng hóa có thể di chuyển lên xuống một cách đơn giản, dễ dàng trong các tòa nhà cao tầng. Tuy nhiên nếu thang hỏng, thường xuyên gặp sự cố khiến bạn cảm thấy khó chịu, không yên tâm về mức độ an toàn trong quá trình sử dụng. Nguyên nhân nào dẫn đến tình trạng đó:</p>
        <ul>
          <li>Một là bạn chưa lựa chọn địa chỉ cung cấp sản phẩm uy tín chất lượng.</li>
          <li>Hai là do quá trình sử dụng, thang bị xuống cấp theo thời gian.</li>
          <li>Ba là bạn sử dụng dịch vụ sửa chữa chưa tốt.</li>
        </ul>
        <img style={{marginTop: "1rem"}} src={servicesimg} alt="img"/>
        <p style={{marginTop: "1.5rem"}}>Mỗi vấn đề là một khía cạnh khác nhau, tuy nhiên có thể là do bạn chưa tìm hiểu kỹ các loại hình sửa chữa thang máy tại Hà Nội, chính vì vậy trong bài viết chia sẻ hôm nay chúng tôi sẽ cung cấp một số thông tin liên quan đến dịch vụ sửa chữa thang máy tại Hà Nội để Quý khách hàng có thể hiểu hơn về dịch vụ này, tự đưa ra cho mình một phương án, định hướng tốt nhất nhé.</p>
      </div>

    </div>
  )
}

export default Services
