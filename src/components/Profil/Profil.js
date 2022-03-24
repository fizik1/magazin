import css from "./css/profil.module.css"
import { useNavigate } from 'react-router-dom'
function Profil (){
    const navigate = useNavigate()
    return(
        <div className={css.Profil}>
            <div className={css.row}>
                <div className={css.image}>
                    <img src="/imgs/avatar.png"/>
                    <button>Изменить</button>
                </div>
                <div className={css.contents}>
                    <label>
                        Имя и фамилия:
                        <input type="text" name="name" defaultValue="Александр Сергеевич"/>
                    </label>
                    <label>
                        Номер телефона:
                        <input type="tel" name="phone" defaultValue="+998 (93) 552-22-22"/>
                    </label>
                    <label>
                        Пароль
                        <input type="password" name="phone" defaultValue='892549886132'/>
                    </label>
                    <button>Изменить</button>
                    <label>
                        Адрес
                        <input type="address" name="phone" defaultValue="Ташкент, ул. Янги сергели, д-9, кв-30"/>
                    </label>
                    <button className="text-red-500 border-2 py-2 border-slate-800 rounded-md" onClick={()=>{navigate('/add')}}>New Product</button>

                </div>
            </div>
        </div>
    )
}
export default Profil