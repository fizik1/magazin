import CategoryList from "../../components/CategoryList";



function Categorys({categorys}){
    let title2 = "Категории"
    let style = {
        bgColor: 'transparent',
        color:'#000'
    }
   

    return(
        <div>
            <CategoryList title = {title2} style = {style} />
        </div>
    )
}

export default Categorys