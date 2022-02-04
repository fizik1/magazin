
import './css/kategoriyalar.css'


let cards = [
    {
        img:"/imgs/obuv1.png",
        kategoriya: 'Женская обувь'
    },
    {
        img:"/imgs/obuv1.png",
        kategoriya: 'Женская обувь'
    },
    {
        img:"/imgs/obuv1.png",
        kategoriya: 'Женская обувь'
    },
    {
        img:"/imgs/obuv1.png",
        kategoriya: 'Женская обувь'
    },
]

function HomeKategoriyalar() {
    const item = cards.map((card, key)=>{
        return(
            <div className="item">
                <div className='image'>
                    <img src={card.img} alt="" />
                </div>
                <div className="title">
                        <h4>{card.kategoriya}</h4>
                </div>
            </div>
        )
    })
    return(
        <div className="Section4">
            <div className="title">
                <h3>Категории</h3>
            </div>
            <div className='items'>
                {item}
            </div>
        </div>
    )
}
export default HomeKategoriyalar;