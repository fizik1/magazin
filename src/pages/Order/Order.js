import '../../components/css/order.css'
import { useNavigate } from 'react-router-dom';
import BasketList from '../../components/BasketList';


function Order() {
    let navigate = useNavigate();

    const handlerNav = ()=>{
        navigate('/Payment')
    }
    return(
        <div className="Buyurtma">
            <div className="rasmiylashtiish">
                <div className='tulov-turi'>
                    <h3>Оформление заказа</h3>
                    <div className="row">
                        <div className="click">
                            <div className="inform">
                                <div className="single">
                                    <p>Товаров: (1)</p>
                                    <p>Сумма: $235</p>
                                </div>
                                <div className="multi">
                                    <p>Общая сумма к оплате: </p>
                                    <p>$235</p>
                                </div>
                            </div>
                            <div className="radio">
                                <label>
                                    <input type="radio" value="click" name="tulov" />
                                    <img src="/imgs/click.png" alt="click" />
                                </label>
                                <label>
                                    <input type="radio" value="payme" name="tulov" />
                                    <img src="/imgs/payme.png" alt="payme" />
                                </label>
                            </div>
                        </div>
                        <div className="fish">
                            <div>
                                <input type="address" id="addredss" name="address" placeholder='Адресс доставки' />
                            </div>
                            <div>
                                <input type="text" id="name" name="name" placeholder='Имя' />
                            </div>
                            <div>
                                <input type="tel" id="phone" name="phone" placeholder='Номер телефона'/>
                            </div>
                            <div>
                                <button onClick={handlerNav}>Перейти к оплате</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='zakazlar'>
                <h4>Ваш заказ</h4>
                <div className='items'>
                    <BasketList/>

                </div>
            </div>
        </div>
    )
}







export default Order;