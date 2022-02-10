
import "../../components/css/cooperation.css"


function Cooperation() {
    return(
        <div className="Hamkorlik">
            <div className="row">
                <div className="texts">
                    <div className="title">
                        <h4>Здравствуйте, оставьте заявку для сотрудничества</h4>
                    </div>
                    <div className="phone">
                        <p className="text1">Phone</p>
                        <p className="text2">+1 848 493 944</p>
                    </div>
                    <div className="address">
                        <p className="text1">Address</p>
                        <p className="text2">508 Bridle Avenue Newnan, GA 30263</p>
                    </div>
                </div>
                <div className="form">
                    <form>
                        <input type="text" name="name" id="name" placeholder="Имя" />
                        <input type="tel" name="phone" id="phone" placeholder="Номер телефона" />
                        <input type="text" name="kompany" id="kompany" placeholder="Компания" />
                        <textarea cols="30" rows="10" placeholder="Коротко о вашей компании"></textarea>
                        <button>Отправить</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Cooperation