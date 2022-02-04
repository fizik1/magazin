import './css/bizhaqimizda.css'
import Afzalliklarimiz from '../home/Afzalliklarimiz'
import Download from '../home/Download'




function BizHaqimizda(){
    return(
        <div className="BizHaqimizda">
            <div className="asosiy">
                <h3>О нас</h3>
                <div className="contents">
                    <div className="texts">
                        <h4>«Потрясающий опыт, мне это нравится много. Спасибо команде.</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat leo, in sit tellus fermentum donec quisque diam molestie. Enim purus ullamcorper ultricies nisi. Eu sit laoreet egestas nascetur lacinia donec nunc viverra. Eu nullam cras eget egestas dui id platea magna. Massa lorem ultrices mauris tellus, mattis eu leo bibendum lobortis. </p>
                    </div>
                    <div className="image">
                        <img src="/imgs/haqimizda.png" alt="" />
                    </div>
                </div>
            </div>
            <Afzalliklarimiz/>
            <Download/>
            <div className='address'>
                <div className='image'>
                    <img src="/imgs/address.png" alt="" />
                </div>
                <div className='contents'>
                    <h3>Работаем по всему миру.</h3>
                    <div className='manzillar'>
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