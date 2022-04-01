import Header from "../../components/Header"
import Afzalliklarimiz from "../../components/Afzalliklarimiz";
import CardList from "../../components/CardList";
import CategoryList from "../../components/CategoryList";
import Download from "../../components/Download";
import Information from "../../components/Information";
import Skidka from "../../components/Skidka";
import axios from 'axios'
import { useEffect, useState } from "react";



function Home(){
    const [ cards, setCards ] = useState(false)
    const [ category, setCategory ] = useState([])
    useEffect(()=>{
        axios.get('/category/get')
            .then(res=>{
                setCategory(res.data)
                console.log(res.data);
            })
    }, [])
    useEffect(()=>{
        axios.get('/home')
        .then(res =>{
            setCards(res.data)
        })
        
    }, [])

    let title1 = 'Лучшие товары',
        title2 = "Категории",
        title3 = "Новые товары";
    let style = {
        bgColor: '#0d0d0d',
        color:'#FFC000',
        padding:"67px 10%"
    }
    return(
        <div className="Home">
            <Header/>
            <Afzalliklarimiz/>
            {cards&&<CardList cards={cards} title = {title1} style={style} />}
            <CategoryList title = {title2} categorys = {category} style = {style} />
            <Download/>
            {cards&&<CardList cards={cards} title = {title3} style={style} />}
            <Information/>
            <Skidka/>

        </div>
    )
}

export default Home;