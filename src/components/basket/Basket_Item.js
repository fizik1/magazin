import './css/basket_item.css'



function Basket_Item() {

    return(
        <div className="Basket_Item">
            <div className="image">
                <img src="/imgs/kiyim1.png" alt="tovar" />
            </div>
            <div className="contents">
                <div className="one">
                    <h3>Худи мужская белая с принтом.</h3>
                    <button><img src="/icons/close.png" alt="close" /></button>
                </div>
                <div className="two">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget tellus purus, id pretium viverra rutrum. Et blandit nunc a pellentesque in cras facilisis sapien, dictum. At vel egestas urna morbi tortor leo ut. In curabitur at pretium vulputate in. Porta bibendum feugiat congue id rhoncus. Vel semper enim, eget.</p>
                </div>
                <div className="three">
                    <div className="section">
                        <div className="price">
                            <p>25.000 Сум</p>
                        </div>
                        <div className="size">
                            <h6>Size:</h6>
                            <p>28</p>
                        </div>
                    </div>
                    <div className="soni">
                        <button><img src="/icons/minus.png" alt="button" /></button>
                        <div className="count"><p>1</p></div>
                        <button><img src="/icons/plus.png" alt="button" /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Basket_Item;