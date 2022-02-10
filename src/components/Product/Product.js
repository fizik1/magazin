import CardList from "../CardList/CardList"
import CategoryList from "../CategoryList/CategoryList"
import css from './css/product.module.css'
import {useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"


function Product(){
    const {data} = useSelector(state=>state)
    const dispatch = useDispatch()
    let cards = data.cards
    let categorys = data.categorys
    let navigate = useNavigate()
    let place = "product"
    let productJson = localStorage.getItem('product')
    let product = JSON.parse(productJson)
    let title1 ="Похожие товары",
        title2 = "Лучшие категории",
        style = {
            padding:"0",
            color:"#000",
            bgColor:"transparent"

        }
    const handlerBasket=(e)=>{
        let product = {
            img:card.img,
            nomi: card.nomi,
            about:card.about,
            price: card.price,
            id:card.id,
            multiPrice:0
        }
        dispatch({type:"addBasket", basket_item:product})
        alert("Magazinga qo'shildi")
        if(place=="basket"){
            navigate("/Basket")
        }
    }
    let card = product
    return(
        <div className={css.Tovar}>
        <div className={css.content}>
            <div className={css.images}>
                <div className={css.asosiy} style={{backgroundImage:`url("${product.img}")`}}>
                   
                </div>
                <div className={css.qushimcha}>
                    <div style={{backgroundImage:`url("${product.img}")`}}></div>
                    <div style={{backgroundImage:`url("${product.img}")`}}></div>
                    <div style={{backgroundImage:`url("${product.img}")`}}></div>
                    <div style={{backgroundImage:`url("${product.img}")`}}></div>
                </div>
            </div>
            <div className={css.texts}>
                <div className={css.name}>
                    <h2>Lorem ipsum dolor sit amet</h2>
                </div>
                <div className={css.reyting}>
                    <img src="/imgs/baho.png" alt="" />
                </div>
                <div className={css.info}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam faucibus porttitor rutrum at tellus sodales libero. Eleifend non.</p>
                </div>
                <div className={css.price}>
                    <p>855 у.е.</p>
                </div>
                <div className={css.size}>
                    <p>Size</p>
                    <ul>
                        <li>28</li>
                        <li>30</li>
                        <li>32</li>
                        <li>34</li>
                        <li>36</li>
                    </ul>
                </div>
                <div className={css.buttons}>
                    <button className={css.korzinkaga} onClick={handlerBasket}>Добавить в корзину</button>
                    <button className={css.buyNow}>Быстрая покупка</button>
                </div>
                <div className={css.afzalliklar}>
                    <h4>Преимущества</h4>
                    <div className={css.items}>
                        <div className={css.item}>
                            <img src="/icons/ic_truck.png" alt="truck" />
                            <p>Delivery in 7 days</p>
                        </div>
                        <div className={css.item}>
                            <img src="/icons/ic_safe.png" alt="safe" />
                            <p>Delivery in 7 days</p>
                        </div>
                        <div className={css.item}>
                            <img src="/icons/ic_medal.png" alt="truck" />
                            <p>Delivery in 7 days</p>
                        </div>
                        <div className={css.item}>
                            <img src="/icons/ic_file_checked.png" alt="truck" />
                            <p>Delivery in 7 days</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div className={css.similar_brand}>
            <CardList cards = {cards} title = {title1} style = {style} place = {place}/>
        </div>
        <div className={css.top_category}>
            <CategoryList categorys={categorys} title = {title2} style={style}/>
        </div>
    </div>
    )
} 

export default Product