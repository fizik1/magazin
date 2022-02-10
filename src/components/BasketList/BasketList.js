import Basket_Item from "../Basket_Item/Basket_Item"
import { useDispatch, useSelector } from 'react-redux'


function BasketList(props) {
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    let allPrice = 0
    console.log('state is:', state)
    const items =state.basket.map((product, key) => {
        allPrice += Number(product.multiPrice)
        
        console.log(allPrice);
            return (
                <Basket_Item inform={product} kalit={key} basket={props.basket} />
            )
        })
    // dispatch({type:"PriceBasket", price:allPrice})
    return (
        <div>
            {items}
        </div>
    )
}

export default BasketList