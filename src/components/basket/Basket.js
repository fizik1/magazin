import Card from "../home/Card";
import Basket_Item from "./Basket_Item";
import { useNavigate } from 'react-router-dom';

import './css/basket.css'

let cards = [
    {
        img:'/imgs/kiyim1.png',
        nomi: 'Lorem ipsum dolor sit amet',
        about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sed odio sed nascetur.',
        price: '855 y.e'
    },
    {
        img:'/imgs/kiyim1.png',
        nomi: 'Lorem ipsum dolor sit amet',
        about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sed odio sed nascetur.',
        price: '855 y.e'
    },
    {
        img:'/imgs/kiyim1.png',
        nomi: 'Lorem ipsum dolor sit amet',
        about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sed odio sed nascetur.',
        price: '855 y.e'
    },
    {
        img:'/imgs/kiyim1.png',
        nomi: 'Lorem ipsum dolor sit amet',
        about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sed odio sed nascetur.',
        price: '855 y.e'
    },
    
]

function Basket(){
    let navigate = useNavigate();

    const handlerNav = ()=>{
        navigate('/buyurtma')
    }
    const card = cards.map((card, key)=>{
        return(
            <Card card={card}/>
        )
    })
    return(
        <div className="Basket">
            <div className="items">
                <Basket_Item/>
                <Basket_Item/>
                <Basket_Item/>
            </div>
            <div className="section">
                <div className="total-price">
                    <h5>Общая цена:</h5>
                    <p>50.000 Сум</p>
                </div>
                <div className="checkout">
                    <button onClick={handlerNav}>Оформить заказ</button>
                </div>
            </div>
            <div className="similar">
                <div className="title">
                    <h4>Похожие товары</h4>
                </div>
                <div className="cards">
                    {card}
                </div>
            </div>

        </div>
    )
}

export default Basket