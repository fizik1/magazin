import { Link } from 'react-router-dom';
import css from './css/face.module.css'

function Header(){
    return(
    
        <div className={css.Header}>
            <div className={css.Section1}>
                <div className={css.bg_black}>
                    <div className={css.items}>
                        <h3>Быстрый и удобный шоппинг, не выходя из дома.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis lectus odio vitae, duis nec ut velit, fermentum. Diam sollicitudin arcu euismod morbi. Adipiscing bibendum elementum, fermentum amet quis erat.</p>
                        <Link to="/Categorys"><img src="imgs/tovarlar-btn.png" alt="" /></Link>
                    </div>
                </div>
                <img src="/imgs/model.png" alt="" />
            </div>
            <div className={css.Section2}>
                <div className={css.bg_white}>
                    <div className={css.items}>
                        <h3>Быстрый и удобный шоппинг, не выходя из дома.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis lectus odio vitae, duis nec ut velit, fermentum. Diam sollicitudin arcu euismod morbi. Adipiscing bibendum elementum, fermentum amet quis erat.</p>
                        <Link to="/Categorys"><img src="imgs/tovarlar-btn.png" alt="" /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;