import Filter from "../../components/Filter"
import { Link } from "react-router-dom"
import '../../components/css/CategoryPage.css'
import { useSelector } from "react-redux"
import CardMenu from "../../components/CardMenu"
import { useEffect, useState } from "react"
import axios from "axios"


function CategoryPage(){
    const [ cards, setCards ] = useState()
    useEffect(()=>{
        axios.get(`/products/category/${localStorage.getItem('category')}`)
            .then(res=>{
                console.log(res);
                setCards(res.data)
            })
    } ,[])
    let style = {
        display:"none",
        padding:"0"
    }


    return(
        <div className="KategorySelect">
            <div className="navlink">
                <p><Link to="/">Главная</Link>/<Link to="/Categorys">Категории</Link></p>
            </div>
            <div className="asosiy">
                <Filter />
                {cards&&<CardMenu cards = {cards} style={style}/>}
            </div>
        </div>
    )
}

export default CategoryPage;