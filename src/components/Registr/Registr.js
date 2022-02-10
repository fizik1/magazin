import css from "./css/login.module.css"

function Registr(){
    return(
        <div className={css.Login}>
            <div className={css.title}>
                <h4>Регистрация</h4>
            </div>
            <div className={css.row}>
                <div className={css.image}>
                    <img src="/imgs/login.png"/>
                </div>
                <div className={css.contents}>
                    <form>
                        <input type="text" name="name" id="name" placeholder="Имя"/>
                        <input type="tel" name="phone" id="phone" placeholder="Номер телефона"/>
                        <input type="address" name="address" id="address" placeholder="Адрес"/>
                        <input type="email" name="email" id="email"/>
                        <label>
                            Пароль
                            <input type="password" name="password" id="password"/>
                        </label>
                        <button>Войти</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Registr