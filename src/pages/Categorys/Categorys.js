import CategoryMenu from "../../components/CategoryMenu";



function Categorys({categorys}){
    let title2 = "Категории"
    let style = {
        bgColor: 'transparent',
        color:'#000'
    }
   

    return(
        <div>
            <CategoryMenu title = {title2} style = {style} />
        </div>
    )
}

export default Categorys