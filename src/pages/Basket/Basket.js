import { useNavigate } from 'react-router-dom';

import '../../components/css/basket.css'
import CardList from "../../components/CardList";
import BasketList from '../../components/BasketList';
import { useSelector } from 'react-redux';



function Basket(){
    const {data, basket} = useSelector(state=>state)
    let place = "basket"
    let title = "Похожие товары",
        style = {
            padding:"0"
        }
    let navigate = useNavigate();

    const handlerNav = ()=>{
        navigate('/Order')
    }
    if (basket.length==0){
        navigate('/NoBasket')
    }


    return(
        <div className="Basket">
            <div className="items">
                <BasketList/>
            </div>
            <div className="section">
                <div className="total-price">
                    <h5>Общая цена:</h5>
                    <p>{
                        basket.map(tour => tour.multiPrice || 0).reduce((sum, item) => sum+item, 0) 
                        } y.e.</p>
                </div>
                <div className="checkout">
                    <button onClick={handlerNav}>Оформить заказ</button>
                </div>
            </div>
            <div className="similar">
                <CardList cards={data.cards} title={title} style = {style} place={place}/>
            </div>

        </div>
    )
}

export default Basket