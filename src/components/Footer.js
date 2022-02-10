import css from '../css/footer.module.css'

function Footer(){
    return(
        <div className={css.footer}>
            <div className={css.foot1}>
                <h4>PRO IMPERIA</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget pretium aenean dignissim sit cursus dictumst adipiscing nunc.</p>
                <div className={css.logo}>
                    <img src="imgs/logo.png" alt="" />
                </div>
            </div>
            <div className={css.foot2}>
                <div className={css.foot21}>
                    <h4>контакты</h4>
                    <ul>
                        <li>+998 90 958 78 87</li>
                        <li>support@fonon.uz</li>
                    </ul>
                </div>
                <div className={css.foot22}>
                    <h4>рабочее время</h4>
                    <ul>
                        <li>По будням 9:00 to 18:00</li>
                        <li>В выходные 11:00 to 18:00</li>
                    </ul>
                </div>
            </div>
            <div className={css.foot3}>
                <h4>Меню</h4>
                <ul>
                    <li>Главная</li>
                    <li>О нас</li>
                    <li>Категории</li>
                    <li>Сотрудничество</li>
                </ul>
            </div>
            <div className={css.foot4}>
                <h4>категории</h4>
                <ul>
                    <li>Женская одежда</li>
                    <li>Мужская одежда</li>
                    <li>Детская одежда</li>
                    <li>Обувь</li>
                    <li>Сумки</li>
                    <li>Аксесуары</li>
                </ul>
            </div>
            <div className={css.adaptiv}>
                <h5>High fidelity wireframes include more real content, specific typography choices, and information on image.</h5>
                <ul>
                    <li>Catalog</li>
                    <li>About</li>
                    <li>Popular</li>
                    <li>Blog</li>
                    <li>Pricing</li>
                    <li>Contacts</li>
                    <li>Features</li>
                </ul>
                <div className={css.address}>
                    <div>
                        <img src='/icons/address.png'/>
                        <p>Los Angeles, 359  Hidden Valley Road</p>
                    </div>
                    <div>
                    <img className={css.icon} src='/icons/massage.png'/>
                        <p>Hellohero@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer