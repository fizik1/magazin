import css from './css/categorymenu.module.css'

import Category from '../Category'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import axios from 'axios'



function CategoryMenu({title, style}){
    const [ category, setCategory ] = useState([])
    useEffect(()=>{
        axios.get('/category/get')
            .then(res=>{
                setCategory(res.data)
                console.log(res.data);
            })
    }, [])
    const item = category.map((category,index)=>{
        return(
            <Category key = {index} category = {category} style = {style}/>
        )
    })
    return (
        <div className={css.CategoryMenu} style={{padding:style.padding}}>
            <h3>{title}</h3>
            <div className={css.cards}>
                {item}
            </div>
        </div>
    )
}

export default CategoryMenu