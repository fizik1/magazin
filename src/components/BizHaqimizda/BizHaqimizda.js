import css from './css/bizhaqimizda.module.css'
import Afzalliklarimiz from '../Afzalliklarimiz/Afzalliklarimiz'
import Download from '../Download/Download'
import { YMaps, Map } from "react-yandex-maps"




function BizHaqimizda() {
    const style = {
        width:"700px",
        height:"500px"
    }
    return (
        <div className={css.BizHaqimizda}>
            <div className={css.asosiy}>
                <h3>О нас</h3>
                <div className={css.contents}>
                    <div className={css.texts}>
                        <h4>«Потрясающий опыт, мне это нравится много. Спасибо команде.</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat leo, in sit tellus fermentum donec quisque diam molestie. Enim purus ullamcorper ultricies nisi. Eu sit laoreet egestas nascetur lacinia donec nunc viverra. Eu nullam cras eget egestas dui id platea magna. Massa lorem ultrices mauris tellus, mattis eu leo bibendum lobortis. </p>
                    </div>
                    <div className={css.image}>
                        <img src="/imgs/haqimizda.png" alt="" />
                    </div>
                </div>
            </div>
            <Afzalliklarimiz />
            <Download />
            <div className={css.address}>
                <div className={css.image}>
                    <YMaps>
                        <Map  style={style} defaultState={{ center: [39.656638, 66.975488], zoom: 12 }} />
                    </YMaps>
                </div>
                <div className={css.contents}>
                    <h3>Работаем по всему миру.</h3>
                    <div className={css.manzillar}>
                        <div>
                            <h5>Bali</h5>
                            <p>508 Bridle Avenue Newnan, GA 30263</p>
                        </div>
                        <div>
                            <h5>London</h5>
                            <p>508 Bridle Avenue Newnan, GA 30263</p>
                        </div>
                        <div>
                            <h5>Moscow</h5>
                            <p>508 Bridle Avenue Newnan, GA 30263</p>
                        </div>
                        <div>
                            <h5>Prague</h5>
                            <p>508 Bridle Avenue Newnan, GA 30263</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BizHaqimizda