import './css/tulov.css'



function Tulov (){
    return(
        <div className="Tulov">
            <h4>Оплата</h4>
            <div className="row">
                <div className="image">
                    <img src="/imgs/master-card.png" alt="master-card" />
                </div>
                <div className="form">
                    <form>
                        <input type="text" name='name-card' id="name-card" placeholder="Имя на карте" />
                        <input type="text" name='number-card' id="number-card" placeholder="Номер карты" />
                        <label>
                            <p>Cрок хранения</p>
                            <input type="text" name='term-card' id="term-card" placeholder="MM/YY" />
                        </label>
                        <button>Оплатить</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Tulov