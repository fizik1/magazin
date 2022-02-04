import '../css/footer.css'

function Footer(){
    return(
        <div className='footer'>
            <div className='foot1'>
                <h4>PRO IMPERIA</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget pretium aenean dignissim sit cursus dictumst adipiscing nunc.</p>
                <div className='logo'>
                    <img src="imgs/logo.png" alt="" />
                </div>
            </div>
            <div className='foot2'>
                <div className='foot21'>
                    <h4>контакты</h4>
                    <ul>
                        <li>+998 90 958 78 87</li>
                        <li>support@fonon.uz</li>
                    </ul>
                </div>
                <div className='foot22'>
                    <h4>рабочее время</h4>
                    <ul>
                        <li>По будням 9:00 to 18:00</li>
                        <li>В выходные 11:00 to 18:00</li>
                    </ul>
                </div>
            </div>
            <div className='foot3'>
                <h4>Меню</h4>
                <ul>
                    <li>Главная</li>
                    <li>О нас</li>
                    <li>Категории</li>
                    <li>Сотрудничество</li>
                </ul>
            </div>
            <div className='foot4'>
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
        </div>
    )
}

export default Footer