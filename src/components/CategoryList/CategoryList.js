import css from './css/categorylist.module.css'
import Category from '../Category/Category'



function CategoryList({title, style, categorys}){
    const item = categorys.map((category,index)=>{
        return(
            <Category key = {index} category = {category} style = {style}/>
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