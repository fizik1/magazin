import css from './css/skidka.module.css'



function Skidka(){
    return(
        <div className={css.Skidka}>
            <h4>Скидка <span className='span'>30%</span> на первую покупку обслютно для всех</h4>
        </div>
    )
}

export default Skidka;