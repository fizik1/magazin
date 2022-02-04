import { Link } from "react-router-dom";
import './css/kategoryselect.css'
import Filter from "./Filter"
import Card1 from "../home/Card1"

let cards = [
    {
        img:'/imgs/kiyim1.png',
        nomi: 'Lorem ipsum dolor sit amet',
        about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sed odio sed nascetur.',
        price: '855 y.e'
    },
    {
        img:'/imgs/kiyim1.png',
        nomi: 'Lorem ipsum dolor sit amet',
        about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sed odio sed nascetur.',
        price: '855 y.e'
    },
    {
        img:'/imgs/kiyim1.png',
        nomi: 'Lorem ipsum dolor sit amet',
        about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sed odio sed nascetur.',
        price: '855 y.e'
    },
    {
        img:'/imgs/kiyim1.png',
        nomi: 'Lorem ipsum dolor sit amet',
        about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sed odio sed nascetur.',
        price: '855 y.e'
    },
    
]

function KategorySelect(){

    const item = cards.map((card,key)=>{
        return(
            <Card1 card={card}/>
        )
    })
    return(
        <div className="KategorySelect">
            <div className="navlink">
                <p><Link to="/">Главная</Link>/<Link to="/Kategoriyalar">Категории</Link></p>
            </div>
            <div className="asosiy">
                <Filter />
                <div className="items">
                    {item}
                </div>
            </div>
        </div>
    )
}

export default KategorySelect;