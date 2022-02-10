
import { combineReducers,  createStore } from "redux";
import basketReduc from "./addBasket";
import {dataReducer} from './dataReducer'
import priceReducer from "./PriceBasket";

let reducers = combineReducers({
    basket:basketReduc,
    data:dataReducer,
    allprice:priceReducer


})

let Store = createStore(reducers,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default Store