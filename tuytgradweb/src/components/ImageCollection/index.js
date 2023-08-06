import './style.css'
import logoThoiKhangHy from '../../assets/logo/bg_tit_home.png'

const ImageCollection = ({images}) => {
    return <div className='image-collection'>
        <div className='image-collection-container'>
            <h1 className="title">BỘ SƯU TẬP ẢNH.</h1>
            <img src={logoThoiKhangHy} className='logo-thoi-khang-hy'/>
            <div className='images-container'>
                {
                    images.map(
                        image => 
                        <img src={ image } className='image-in-colection'/>
                    )
                }

            </div>
        </div>
    </div>
}


export default ImageCollection

