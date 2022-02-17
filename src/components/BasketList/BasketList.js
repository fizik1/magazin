import Basket_Item from "../Basket_Item/Basket_Item"
import { useSelector } from 'react-redux'


function BasketList(props) {
    const state = useSelector(state => state)
    let allPrice = 0
    const items =state.basket.map((product, index) => {
        allPrice += Number(product.multiPrice)
        console.log(index);
            return (
                <Basket_Item inform={product} index={index} basket={props.basket} />
            )
        })
    return (
        <div>
            {items}
        </div>
    )
}

export default BasketList