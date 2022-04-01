import { Link, useNavigate } from "react-router-dom";
import css from '../css/nav.module.css'
import 'boxicons'
import { useState, useEffect} from 'react'
import { useSelector } from "react-redux";
import axios from "axios";

function Nav(){
    const [ logged, setLogged ] = useState(false)
    const navigate = useNavigate()
    const state = useSelector(state=>state)
    const [sstate, setsstate] = useState(true);
    const handlerMenuClose=()=>{
        setsstate(true)
    }

    useEffect(()=>{
        axios.get('/auth/user')
            .then(res=>{
                setLogged(res.data.isLogged)
                console.log(logged);
            })
    })

    const navBasket = ()=>{
        if(state.basket.length==0){
            navigate("/NoBasket")
        }else navigate('/Basket')
    }
    useEffect(() => {
        if(sstate){
            document.body.style.cssText = "overflow: auto;"
        }
        else{
            document.body.style.cssText = "overflow: hidden"
        }
    }, [sstate])
    const logOut = ()=>{
        axios.put('/auth/logout')
    }
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
                    <Link to="/"><h1>MILANDI</h1></Link>
                    <button onClick={()=>{setsstate(false)}}><box-icon name='menu'></box-icon></button>
                    <Link to="/"><img src="/imgs/logo.png"/></Link>
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
                <div className={sstate?css.none:css.menu} onClick={handlerMenuClose}>
                    <button className={css.close} onClick={handlerMenuClose}><img src="/icons/close.png"/></button>
                    <ul>
                        <li><Link onClick={()=>{setsstate(true)}} to="/">Главная</Link></li>
                        <li><Link onClick={()=>{setsstate(true)}} to="/AboutUs">О нас</Link></li>
                        <li><Link onClick={()=>{setsstate(true)}} to="/Categorys">Категории</Link></li>
                        <li><Link onClick={()=>{setsstate(true)}} to="/Cooperation">Сотрудничество</Link></li>
                    </ul>
                    {!logged&&
                    <div>
                        <Link to="/Login"><button className={css.kirish_btn}>Войти</button></Link>
                        <Link to="/Registr"><button className={css.registr_btn}>Зарегистрироваться</button></Link>
                    </div>
                    }
                    {logged&&
                    <Link to="/Registr"><button className={css.registr_btn} onClick={logOut}>Выход</button></Link>
                    }

                </div>
            </div>
        </div>
    )
}

export default Nav