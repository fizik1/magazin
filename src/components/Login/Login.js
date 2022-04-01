import css from "./css/login.module.css"
import {Link} from "react-router-dom"
import {useNavigate} from 'react-router-dom'
function Login(){
    const navigate = useNavigate()
    
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
                    <form action="/auth/login" method="POST" onSubmit={(e)=>{
                        e.preventDefault();
                        navigate('/')
                    }}>
                        <input type="email" name="email" id="email"/>
                        <label>
                            Пароль
                            <input type="password" name="password" id="password"/>
                        </label>
                        <input type="submit" value="Войти"/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login