import './css/card.css'
import { useNavigate } from 'react-router-dom';


function Card1(props){
    let navigate = useNavigate();

    const handlerNav = ()=>{
        navigate('/Tovar')
    }
    let card = props.card
    return(
        <div className="item" onClick={handlerNav}>
            <div className="image">
                <img src={card.img} alt="kiyim" />
            </div>
            <div className="about">
                <h4>{card.nomi}</h4>
                <p>{card.about}</p>
                <div className="price">
                    <img src="/imgs/baho.png" alt="star" />
                    <p>{card.price}</p>
                </div>
            </div>
        </div>
    )
}

export default Card1;