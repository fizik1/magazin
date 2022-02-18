import css from  './css/card.module.css'
import { useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import { useState } from 'react'


function Card(props){
    const [ pin, setpin ] = useState(false)
    const dispatch = useDispatch()
    const state = useSelector(state => state.basket);
    let place = props.place || false
    let navigate = useNavigate();

    const handlerNav = ()=>{
        let product = {
            img:card.img,
            nomi: card.nomi,
            about:card.about,
            price: card.price,
            id:card.id,
            multiPrice:card.price,
            allPrice:0
        }
        let productJson = JSON.stringify(product)
        localStorage.setItem("product", productJson)
        navigate('/Product')
        
    }
    const handlerBasket=(e)=>{
        let product = {
            img:card.img,
            nomi: card.nomi,
            about:card.about,
            price: card.price,
            id:card.id,
            multiPrice:card.price
        }
        dispatch({type:"addBasket", basket_item:product})
        if(place=="basket"){
            navigate("/Basket")
        }
        setpin(true)
        setTimeout(()=>{setpin(false)}, 2000)
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
            <div className={pin ? css.alert: css.none}>
            <p>Savatga qo'shildi</p>
            </div>
        </div>
    )
}

export default Card;