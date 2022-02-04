
import './css/download.css'

function Download() {
    return(
        <div className="Section5">
            <div className='blue'>
                <img src="/imgs/iphone12.png" alt="iphone12" />
                <div className='items'>
                    <h3>Скачай приложение и получай призы каждый день</h3>
                    <p>Скачав наш приложение вы получаете возможность играть в призовые игры каждый день и выигровать разного рода подарки для себя. В нашем приложении призовые игры проходят аблолютно каждый день и всё это совершенно бесплатно.</p>
                    <div className='buttons'>
                        <button><img src="/imgs/appstore.png" alt="applestore" /></button>
                        <button><img src="/imgs/googleplay.png" alt="googleplay" /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Download;