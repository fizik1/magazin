
import Card from '../Card/Card'
import css from './css/cardmenu.module.css'



function CardMenu(props){
    console.log(props.basket);
    const item = props.cards.map((card, key)=>{
        return(
            <Card card = {card} style={props.style} place={props.place}/>
        )
    })
    return(
        <div className={css.CardMenu} style={{padding:props.style.padding}} >
            <div className={css.title}>
                <h3>{props.title}</h3>
            </div>
            <div className={css.items}>
                {item}
            </div>
        </div>
    )
}

export default CardMenu;