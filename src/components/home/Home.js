import Face from "./Face";
import Afzalliklarimiz from "./Afzalliklarimiz";
import EngYaxshi from "./EngYaxshi";
import HomeKategoriyalar from "./HomeKategoriyalar";
import Download from "./Download";
import YangiTovarlar from "./YangiTovarlar";
import XaridQilish from "./XaridQilish";
import Skidka from "./Skidka";



function Home(){
    return(
        <div className="home">
            <Face/>
            <Afzalliklarimiz/>
            <EngYaxshi/>
            <HomeKategoriyalar/>
            <Download/>
            <YangiTovarlar/>
            <XaridQilish/>
            <Skidka/>
        </div>
    
    
    )
}

export default Home