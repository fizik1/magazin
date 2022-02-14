import Filter from "../../components/Filter"
import { Link } from "react-router-dom"
import '../../components/css/CategoryPage.css'
import { useSelector } from "react-redux"
import CardMenu from "../../components/CardMenu"


function CategoryPage({cards}){
    const {data} = useSelector(state=>state)
    let style = {
        display:"none",
        padding:"0"
    }


    return(
        <div className="KategorySelect">
            <div className="navlink">
                <p><Link to="/">Главная</Link>/<Link to="/Categorys">Категории</Link></p>
            </div>
            <div className="asosiy">
                <Filter />
                <CardMenu cards = {data.cards} style={style}/>
            </div>
        </div>
    )
}

export default CategoryPage;