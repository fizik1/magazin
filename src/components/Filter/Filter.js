import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useState } from 'react'
import css from './css/filter.module.css'



function Filter(){

    const [selected, setSelected] = useState(null)

    const toogle = (i) =>{
        if(selected===i){
            return setSelected(null)
        }
        setSelected(i)
    }
    return(
        <div className={css.filter}>
            <div className={css.title} onClick={()=>toogle(10)}>
                <h4>Filter</h4>
            </div>
            <div className={ selected!=10 ? css.accardion : css.accardionShow}>
                <div className={css.item1}>
                    <div className={css.item1}>
                        <div className={css.title} onClick={()=>toogle(1)}>
                            <div className={css.text}>
                                <h4>Category</h4>
                            </div>
                        </div>
                        <div className={selected === 1 ? css.show: css.content}>
                            <ul>
                                <li><p>Women’s wear</p> <input type="checkbox" /></li>
                                <li><p>Men’s wear</p> <input type="checkbox" /></li>
                                <li><p>Kid’s wear</p> <input type="checkbox" /></li>
                                <li><p>Shoes</p> <input type="checkbox" /></li>
                                <li><p>Сумки</p> <input type="checkbox" /></li>
                                <li><p>Accessories</p> <input type="checkbox" /></li>
                                <li><p>Underwear</p> <input type="checkbox" /></li>
                                <li><p>Decorations</p> <input type="checkbox" /></li>
                                <li><p>Home textiles</p> <input type="checkbox" /></li>
                                <li><p>Wholesale</p> <input type="checkbox" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={css.item1}>
                    <div className={css.item1}>
                        <div className={css.title} onClick={()=>toogle(2)}>
                            <div className={css.text}>
                                <h4>Subcategories</h4>
                            </div>
                        </div>
                        <div className={selected === 2 ? css.show: css.content}>
                            <ul>
                                <li><p>Women’s wear</p> <input type="checkbox" /></li>
                                <li><p>Men’s wear</p> <input type="checkbox" /></li>
                                <li><p>Kid’s wear</p> <input type="checkbox" /></li>
                                <li><p>Shoes</p> <input type="checkbox" /></li>
                                <li><p>Сумки</p> <input type="checkbox" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={css.item1}>
                    <div className={css.item1}>
                        <div className={css.title} onClick={()=>toogle(3)}>
                            <div className={css.text}>
                                <h4>Gender</h4>
                            </div>
                        </div>
                        <div className={selected === 3 ? css.show: css.content}>
                            <ul>
                                <li><p>For men</p> <input type="checkbox" /></li>
                                <li><p>For women</p> <input type="checkbox" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={css.item1}>
                    <div className={css.item1}>
                        <div className={css.title} onClick={()=>toogle(4)}>
                            <div className={css.text}>
                                <h4>Price</h4>
                            </div>
                        </div>
                        <div className={selected === 4 ? css.show: css.content}>
                            <Box width='100%'>
                                <Slider
                                    size="small"
                                    defaultValue={70}
                                    aria-label="Small"
                                    valueLabelDisplay="auto"
                                />
                            </Box>
                            <div className={css.ot_do}>
                                <label>От
                                    <input type="number" />
                                </label>
                                <label>До
                                    <input type="number" min={0} max={5000000} />
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={css.button}>
                <button>Clean filter</button>
            </div>
        </div>
    )
}

export default Filter;