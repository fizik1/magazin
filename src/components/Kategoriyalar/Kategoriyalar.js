import './css/kategoriyalar.css'
import Kategoriya from './Kategoriya'
let cards = [
    {
        img:"/imgs/kategoriya.png",
        kategoriya: 'Women’s wear'
    },
    {
        img:"/imgs/kategoriya.png",
        kategoriya: 'Women’s wear'
    },
    {
        img:"/imgs/kategoriya.png",
        kategoriya: 'Women’s wear'
    },
    {
        img:"/imgs/kategoriya.png",
        kategoriya: 'Women’s wear'
    },
    {
        img:"/imgs/kategoriya.png",
        kategoriya: 'Women’s wear'
    },
    {
        img:"/imgs/kategoriya.png",
        kategoriya: 'Women’s wear'
    },
    {
        img:"/imgs/kategoriya.png",
        kategoriya: 'Women’s wear'
    },
    {
        img:"/imgs/kategoriya.png",
        kategoriya: 'Women’s wear'
    },
    {
        img:"/imgs/kategoriya.png",
        kategoriya: 'Women’s wear'
    },
    {
        img:"/imgs/kategoriya.png",
        kategoriya: 'Women’s wear'
    },

]


function Kategoriyalar(){
    const item = cards.map((card,key)=>{
        return(
            <Kategoriya card = {card}/>
        )
    })
    return (
        <div className="Kategoriyalar">
            <h3>Категории</h3>
            <div className="cards">
                {item}
            </div>
        </div>
    )
}

export default Kategoriyalar