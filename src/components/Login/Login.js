import css from "./css/login.module.css"
import {Link} from "react-router-dom"
function Login(){
    return(
        <div className={css.Login}>
            <div className={css.title}>
                <h4>Вход</h4>
            </div>
            <div className={css.row}>
                <div className={css.image}>
                    <img src="/imgs/login.png"/>
                </div>
                <div className={css.contents}>
                    <form>
                        <input type="email" name="email" id="email"/>
                        <label>
                            Пароль
                            <input type="password" name="password" id="password"/>
                        </label>
                        <Link to="/Profil"><button>Войти</button></Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login