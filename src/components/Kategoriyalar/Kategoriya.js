
import { useNavigate } from 'react-router-dom';
import './css/kategoriya.css'

function Kategoriya(props){
    let navigate = useNavigate();

    const handlerNav = ()=>{
        navigate('/kategory-select')
    }
    return(
        <div className="kategoriya" onClick={handlerNav}>
            <img src={props.card.img} alt="kategoriya" />
            <div className="title">
                <h4>{props.card.kategoriya}</h4>
            </div>
        </div>
    )
}
export default Kategoriya;