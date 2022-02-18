import css from './css/Information.module.css'

function Information(){

    return(
        <div className={css.xaridqilish}>
            <img src="/imgs/section7.png" alt="image" />
            <div className={css.contents}>
                <h4>Создай свой лук на все случаи жизни в “Imperia”</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam sollicitudin a cursus in. Vel sit donec semper magna dignissim. Amet, mi justo at metus vestibulum sollicitudin lacus. Nunc vel egestas fermentum pellentesque sed vitae vel.</p>
                <button>начать покупки</button>
            </div>
        </div>
    )
}

export default Information;