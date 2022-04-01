import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import Home from "../home/"
import {
    Routes,
    Route
  } from "react-router-dom";
import AboutUs from "../AboutUs";
import Categorys from "../Categorys";
import CategoryPage from "../CategoryPage";
import Product from "../ProductPage";
import Cooperation from "../Cooperation";
import Basket from "../Basket";
import Order from "../Order";
import Payment from "../Payment";
import LoginPage from "../LoginPage";
import RegistrPage from "../RegistrPage";
import Nobasket from "../../components/NoBasket";
import ProfilPage from "../ProfilPage";
import AddItem from "../../components/addItem";
import AddCategory from "../../components/addCategory";
import { useEffect, useState } from "react";

function Basic(props){
    const [ category, setCategory ] = useState('')
    let yangi = localStorage.getItem('category')
    useEffect(()=>{
        setCategory(localStorage.getItem('category'))
        console.log(localStorage.getItem('category'));
    }, [])
    return(
       <div className="Basic">
            <Nav/>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/AboutUs" element={<AboutUs/>}/>
                <Route path="/Categorys" element={<Categorys/>}/>
                <Route path="CategoryPage" element={<CategoryPage  cards = {props.cards} categorys = {props.categorys}/>}/>
                <Route path="/Product" element={<Product  cards = {props.cards} categorys = {props.categorys}/>}/>
                <Route path="/Cooperation" element={<Cooperation/>}/>
                <Route path="/Basket" element={<Basket/>}/>
                <Route path="/Order" element={<Order/>}/>
                <Route path="/Payment" element={<Payment/>}/>
                <Route path="/Login" element={<LoginPage/>}/>
                <Route path="/Registr" element={<RegistrPage/>}/>
                <Route path="/NoBasket" element={<Nobasket/>}/>
                <Route path="/Profil" element={<ProfilPage/>}/>
                <Route path='/add' element={<AddItem/>}/>
                <Route path='/addCategory' element={<AddCategory/>}/>

            </Routes>
            <Footer/>
       </div> 
    )
}

export default Basic;