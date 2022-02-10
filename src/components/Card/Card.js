import css from  './css/card.module.css'
import { useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'


function Card(props){
    const dispatch = useDispatch()
    const state = useSelector(state => state.basket);
    console.log(props.basket);
    let place = props.place || false
    let navigate = useNavigate();

    const handlerNav = ()=>{
        console.log(card);
        let product = {
            img:card.img,
            nomi: card.nomi,
            about:card.about,
            price: card.price,
            id:card.id,
            multiPrice:0,
            allPrice:0
        }
        let productJson = JSON.stringify(product)
        localStorage.setItem("product", productJson)
        if(place=="product"){
            window.location.reload();
        }else{navigate('/Product')}
        
    }
    const handlerBasket=(e)=>{
        let product = {
            img:card.img,
            nomi: card.nomi,
            about:card.about,
            price: card.price,
            id:card.id,
            multiPrice:0
        }
        dispatch({type:"addBasket", basket_item:product})
        alert("Magazinga qo'shildi")
        if(place=="basket"){
            navigate("/Basket")
        }
        
    }
    let card = props.card
    return(
        <div className={css.item} >
            <div className={css.image} onClick={handlerNav}>
                <img src={card.img} alt="kiyim" />
            </div>
            <div className={css.about}>
                <h4>{card.nomi}</h4>
                <p>{card.about}</p>
                <div className={css.price}>
                    <img src="/imgs/baho.png" alt="star" />
                    <p>{card.price}</p>
                </div>
                <button onClick={(e)=>{handlerBasket(e)}} style={{display:props.style.display}}>Добавить в корзину</button>
            </div>
        </div>
    )
}

export default Card;