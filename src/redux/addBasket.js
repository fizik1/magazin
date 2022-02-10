let addBasket = 'addBasket';
let deleteBasket = "deleteBasket";
let spliceBasket = "spliceBasket"

let initialState = []

const basketReduc = (state = initialState, action) => {
    switch (action.type) {
        case addBasket:
            return [action.basket_item , ...state]
        case deleteBasket:
            return [...state].filter((item, index) => index !== action.key)
        case spliceBasket:
            console.log('key:', action.key)
            return state.map((item, index) => index != action.key ? item : {
                ...item,
                multiPrice: action.multiPrice,
                name: "Abdurahmon"
            })
        default:
            return state;
    }
}

export default basketReduc