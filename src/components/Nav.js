import { Link, useNavigate } from "react-router-dom";
import css from '../css/nav.module.css'
import 'boxicons'
import { useState } from 'react'
import { useSelector } from "react-redux";

function Nav(){
    const navigate = useNavigate()
    const state = useSelector(state=>state)
    const [sstate, setsstate] = useState(true);
    const handlerMenuClose=()=>{
        setsstate(true)
        console.log("salom");
    }
    const navBasket = ()=>{
        if(state.basket.length==0){
            navigate("/NoBasket")
        }else navigate('/Basket')
    }
    console.log(state.basket.length);
    console.log(sstate);
    return(
        <div className={css.nav}>
            <div className={css.bg_black}>
                <div className={css.buttons}>
                    <button>RU</button>
                    <button>UZB</button>
                </div>
            </div>
            <div className={css.navbar}>
                <div className={css.nav1}>
                    <h1>MILANDI</h1>
                    <button onClick={()=>{setsstate(false)}}><box-icon name='menu'></box-icon></button>
                    <img src="/imgs/logo.png"/>
                    </div>
                <div className={css.nav2}>
                    <ul>
                        <li onClick={handlerMenuClose}><Link to="/" >Главная</Link></li>
                        <li><Link to="/AboutUs" >О нас</Link></li>
                        <li><Link to="/Categorys" >Категории</Link></li>
                        <li><Link to="/Cooperation" >Сотрудничество</Link></li>
                    </ul>
                </div>
                <div className={css.nav3}>
                    <Link to="/Login"><button className={css.kirish_btn}>Войти</button></Link>
                    <Link to="/Registr"><button className={css.registr_btn}>Зарегистрироваться</button></Link>
                    <button className={css.basket_btn} onClick={navBasket}><img src="icons/basket.png" alt="" /></button>
                </div>
                <div className={sstate?css.none:css.menu}>
                    <button className={css.close} onClick={handlerMenuClose}><img src="/icons/close.png"/></button>
                    <ul>
                        <li><Link onClick={()=>{setsstate(true)}} to="/">Главная</Link></li>
                        <li><Link onClick={()=>{setsstate(true)}} to="/AboutUs">О нас</Link></li>
                        <li><Link onClick={()=>{setsstate(true)}} to="/Categorys">Категории</Link></li>
                        <li><Link onClick={()=>{setsstate(true)}} to="/Cooperation">Сотрудничество</Link></li>
                    </ul>
                    <Link to="/Login"><button className={css.kirish_btn}>Войти</button></Link>
                    <Link to="/Registr"><button className={css.registr_btn}>Зарегистрироваться</button></Link>

                </div>
            </div>
        </div>
    )
}

export default Nav