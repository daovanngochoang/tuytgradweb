
import './style.css'

const NoNameCard = ({ icon, title, subtitle }) => {
    return <>
        <div className='nonname-card-item'>
            <img className='nonname-card-icon' src={icon} />
            <div className='nonname-card-title'>
                <h3>{title}</h3>
                <p>{subtitle}</p>
            </div>
        </div>
    </>

}


export default NoNameCard;
