
import { useNavigate } from 'react-router-dom';
import css from './css/category.module.css'

function Category({category, style}){
    let navigate = useNavigate();

    const handlerNav = ()=>{
        localStorage.clear()
        console.log(category.nomi);
        localStorage.setItem('category',category.nomi )
        navigate(`/CategoryPage`)
    }
    return(
        <div className={css.kategoriya} onClick={handlerNav}>
            <img src={category.img} alt="kategoriya" />
            <div className={css.title} style={{backgroundColor:style.bgColor}}>
                <h4 style={{color:style.color}}>{category.nomi}</h4>
            </div>
        </div>
    )
}
export default Category;