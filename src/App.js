import BizHaqimizda from "./components/Biz haqimizda/BizHaqimizda";
import Footer from "./components/Footer";
import Home from "./components/home/Home";
import Nav from "./components/Nav";
import {
  Routes,
  Route
} from "react-router-dom";
import Kategoriya from "./components/Kategoriyalar/Kategoriya";
import Kategoriyalar from "./components/Kategoriyalar/Kategoriyalar";
import Filter from "./components/Kategoriya bulimlari/Filter";
import KategorySelect from "./components/Kategoriya bulimlari/KategorySelect";
import Tovar from "./components/tovar/Tovar";
import Basket from "./components/basket/Basket";
import Buyurtma from "./components/buyurtma/Buyurtma";
import Tulov from "./components/buyurtma/Tulov";


function App() {
  return (
    <div className="App">
      
      <Nav/>
        {/* <Home/> */}
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="BizHaqimizda" element={<BizHaqimizda />} />
          <Route path="Kategoriyalar" element={<Kategoriyalar />} />
          <Route path="/kategory-select" element={<KategorySelect />} />
          <Route path="/Tovar" element={<Tovar />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/buyurtma" element={<Buyurtma />} />
          <Route path="/tulov" element={<Tulov />} />
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
