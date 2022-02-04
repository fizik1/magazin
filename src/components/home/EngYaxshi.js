import Card from './Card'
import './css/engyaxshi.css'

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

function EngYaxshi(){
    const item = cards.map((card, key)=>{
        return(
            <Card card = {card}/>
        )
    })
    return(
        <div className="Section3">
            <div className="title">
                <h3>Лучшие товары</h3>
            </div>
            <div className="items">
                {item}
            </div>
        </div>
    )
}

export default EngYaxshi;