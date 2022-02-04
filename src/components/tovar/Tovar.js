import Card from '../home/Card'
import Kategoriya from '../Kategoriyalar/Kategoriya'
import './css/tovar.css'

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
let kategoriyalar = [
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

function Tovar() {
    const similar = cards.map((card, key)=>{
        return(
            <Card card={card}/>
        )
    })
    const category = kategoriyalar.map((card, key)=>{
        return(
            <Kategoriya card={card}/>
        )
    })

    return(
        <div className="Tovar">
            <div className="content">
                <div className="images">
                    <div className="asosiy" style={{backgroundImage:'url("/imgs/kiyim1.png")'}}>
                       
                    </div>
                    <div className="qushimcha">
                        <div style={{backgroundImage:'url("/imgs/kiyim1.png")'}}></div>
                        <div style={{backgroundImage:'url("/imgs/kiyim1.png")'}}></div>
                        <div style={{backgroundImage:'url("/imgs/kiyim1.png")'}}></div>
                        <div style={{backgroundImage:'url("/imgs/kiyim1.png")'}}></div>
                    </div>
                </div>
                <div className="texts">
                    <div className="name">
                        <h2>Lorem ipsum dolor sit amet</h2>
                    </div>
                    <div className="reyting">
                        <img src="/imgs/baho.png" alt="" />
                    </div>
                    <div className="info">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam faucibus porttitor rutrum at tellus sodales libero. Eleifend non.</p>
                    </div>
                    <div className="price">
                        <p>855 у.е.</p>
                    </div>
                    <div className="size">
                        <p>Size</p>
                        <ul>
                            <li>28</li>
                            <li>30</li>
                            <li>32</li>
                            <li>34</li>
                            <li>36</li>
                        </ul>
                    </div>
                    <div className="buttons">
                        <button className="korzinkaga">Добавить в корзину</button>
                        <button className="buyNow">Быстрая покупка</button>
                    </div>
                    <div className="afzalliklar">
                        <h4>Преимущества</h4>
                        <div className="items">
                            <div className="item">
                                <img src="/icons/ic_truck.png" alt="truck" />
                                <p>Delivery in 7 days</p>
                            </div>
                            <div className="item">
                                <img src="/icons/ic_safe.png" alt="safe" />
                                <p>Delivery in 7 days</p>
                            </div>
                            <div className="item">
                                <img src="/icons/ic_medal.png" alt="truck" />
                                <p>Delivery in 7 days</p>
                            </div>
                            <div className="item">
                                <img src="/icons/ic_file_checked.png" alt="truck" />
                                <p>Delivery in 7 days</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='similar-brand'>
                <div className='title'>
                    <h3>Похожие товары</h3>
                </div>
                <div className='items'>
                    {similar}
                </div>
            </div>
            <div className='top-category'>
                <div className='title'>
                    <h3>Лучшие категории</h3>
                </div>
                <div className='items'>
                    {category}
                </div>
            </div>
        </div>
        
    )
}

export default Tovar;