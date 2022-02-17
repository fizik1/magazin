import css from './css/basket_item.module.css'
import { useState } from "react"
import {useSelector, useDispatch} from 'react-redux'

function Basket_Item(props) {
    const state = useSelector(state => state)
    
    const dispatch = useDispatch()
    const [count, setCount] = useState(1) 
    let kalit = props.index
    let inform = props.inform
    let product = state.basket[kalit]
    
    const handlerDelete = ()=>{
        
        dispatch({type:"deleteBasket", key:kalit })
    }
    const handlerPlus=()=>{
        setCount(count + 1)
        let multiPrice = (count+1)*product.price;
        dispatch({type:"spliceBasket", key:kalit, multiPrice})
    }
    const handlerMinus=()=>{
        if(count>0){
            setCount(count - 1)
            let multiPrice = (count-1)*product.price;
            dispatch({type:"spliceBasket", key:kalit, multiPrice})
        }
    }

    return(
        <div className={css.Basket_Item}>
            <div className={css.image}>
                <img src={inform.img} alt="tovar" />
            </div>
            <div className={css.contents}>
                <div className={css.one}>
                    <h3>{inform.nomi}</h3>
                    <button onClick={handlerDelete}><img src="/icons/close.png" alt="close" /></button>
                </div>
                <div className={css.two}>
                    <p>{inform.about}</p>
                </div>
                <div className={css.three}>
                    <div className={css.section}>
                        <div className={css.price}>
                            <p>{state.basket[kalit].multiPrice} y.e.</p>
                        </div>
                        <div className={css.size}>
                            <h6>Size:</h6>
                            <p>28</p>
                        </div>
                    </div>
                    <div className={css.soni}>
                        <button onClick={handlerMinus}><img src="/icons/minus.png" alt="button" /></button>
                        <div className={css.count}><p>{count}</p></div>
                        <button onClick={handlerPlus}><img src="/icons/plus.png" alt="button" /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Basket_Item;