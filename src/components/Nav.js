import { Link } from "react-router-dom";
import '../css/nav.css'

function Nav(){
    return(
        <div className="nav">
            <div className="bg-black">
                <div className='buttons'>
                    <button>RU</button>
                    <button>UZB</button>
                </div>
            </div>
            <div className="navbar">
                <div className="nav1">MILANDI</div>
                <div className='nav2'>
                    <ul>
                        <li><Link to="/">Главная</Link></li>
                        <li><Link to="/BizHaqimizda">О нас</Link></li>
                        <li><Link to="/Kategoriyalar">Категории</Link></li>
                        <li><Link to="/Hamkorlik">Сотрудничество</Link></li>
                    </ul>
                </div>
                <div className="nav3">
                    <button className='kirish-btn'>Войти</button>
                    <button className='registr-btn'>Зарегистрироваться</button>
                    <Link to="/basket"><button className='basket-btn'><img src="icons/basket.png" alt="" /></button></Link>
                </div>
            </div>
        </div>
    )
}

export default Nav