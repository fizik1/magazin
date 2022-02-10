import { Link } from "react-router-dom"
import css from "./css/nobasket.module.css"


function Nobasket(){
    return(
        <div className={css.row}>
            <div className={css.contents}>
                <h4>Ой Ой, здесь похоже ничего нет.</h4>
                <p>Перейдите к товарам и поплните корзину.</p>
                <Link to="/Categorys"><button>Пополнить корзину</button></Link>
            </div>
            <div className={css.image}>
                <img src="/imgs/no-basket.png"/>
            </div>
        </div>
    )
}

export default Nobasket