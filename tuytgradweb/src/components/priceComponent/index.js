import './style.css'
import logoThoiKhangHy from '../../assets/logo/bg_tit_home.png'

const BaogiaComponent = () => {
    return <div className='baogia'>
        <div className='baogia-container'>
            <h1 className="title">NHẬP THÔNG TIN ĐỂ BÁO GIÁ.</h1>
            <img src={logoThoiKhangHy} className='logo-thoi-khang-hy'/>
            <input className='baogia-input-field' type="text" id="inputField" name="name" placeholder="Họ và tên." />
            <input className='baogia-input-field' type="text" id="inputField" name="name" placeholder="Số điện thoại." />
            <input className='baogia-input-field' type="text" id="inputField" name="name" placeholder="Email" />
            <textarea className='baogia-request-input' type="text" id="inputField" name="name" placeholder="Nội Dung yêu cầu." />
            <button className='submit-button'>Gửi Đi.</button>
        </div>
    </div>
}


export default BaogiaComponent

