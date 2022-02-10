import "./css/afzalliklarimiz.css"



function Afzalliklarimiz() {
    return(
        <div className='Section2'>
            <div className="title">
                <h3>Наши преимущества</h3>
            </div>
            <div className="items">
                <div className="item">
                    <img src="/icons/stars.png" alt="stars" />
                    <p>Лучший сервис</p>
                </div>
                <div className="item">
                    <img src="/icons/ic_truck.png" alt="stars" />
                    <p>Экспресс доставка </p>
                </div>
                <div className="item">
                    <img src="/icons/ic_like.png" alt="stars" />
                    <p>Лучшее качество в стране</p>
                </div>
            </div>
        </div>
    )
}

export default Afzalliklarimiz;