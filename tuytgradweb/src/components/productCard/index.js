import './style.css'
import {Link} from 'react-router-dom'
import icon from '../../assets/icon/icon-right.png'


const ProductCard = ({ title, image, link}) => {
    return <>
        <div className="product-card-container">
            <img src={image} className='product-card-image' />
            {/* <Link to={link}> */}
            <div className='product-card-link'>
                <span >{title}</span>
                <i className="arrow right" />
            </div>
            {/* </Link> */}

        </div>
    </>

}


export default ProductCard;


