let PriceBasket = "PriceBasket"


let initialState=[]

const priceReducer = (state = initialState, action) => {
    switch (action.type) {
        case PriceBasket:
            return  [...state, action.price]
            
        default:
            return state;
    }
}


export default priceReducer