import css from './css/categorylist.module.css'
import Category from '../Category/Category'
import { useSelector } from 'react-redux'



function CategoryList({title, style}){
    const {data} = useSelector(state=>state)
    const item = data.categorys.map((category,key)=>{
        return(
            <Category category = {category} style = {style}/>
        )
    })
    return (
        <div className={css.Kategoriyalar} style={{padding:style.padding}}>
            <h3>{title}</h3>
            <div className={css.cards}>
                {item}
            </div>
        </div>
    )
}

export default CategoryList