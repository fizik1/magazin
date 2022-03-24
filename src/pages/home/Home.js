import Header from "../../components/Header"
import Afzalliklarimiz from "../../components/Afzalliklarimiz";
import CardList from "../../components/CardList";
import CategoryList from "../../components/CategoryList";
import Download from "../../components/Download";
import Information from "../../components/Information";
import Skidka from "../../components/Skidka";
import { useSelector } from "react-redux";
import axios from 'axios'
import { useEffect, useState } from "react";



function Home(){
    const {data} = useSelector(state => state)
    const [ cards, setCards ] = useState(false)
    useEffect(()=>{
        axios.get('products/add')
        .then(res =>{
            setCards(res.data)
        })
        
    }, [])
    console.log(data);
    console.log(cards);
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
            <CategoryList title = {title2} categorys = {data.categorys} style = {style} />
            <Download/>
            <CardList cards={data.cards} title = {title3} style={style} />
            <Information/>
            <Skidka/>

        </div>
    )
}

export default Home;