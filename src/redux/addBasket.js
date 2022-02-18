let addBasket = 'addBasket';
let deleteBasket = "deleteBasket";
let spliceBasket = "spliceBasket"

let initialState = []

const basketReduc = (state = initialState, action) => {
    switch (action.type) {
        case addBasket:
            if(state.length==0){ 
                state.push(action.basket_item);
            }
            else if (true) {
                const add = state.filter(item => item.id === action.basket_item.id)
                if (add.length == 0) {
                    state.unshift(action.basket_item);
                } 
            }

        case deleteBasket:
            return [...state].filter((item, index) => index !== action.key)
        case spliceBasket:
            return state.map((item, index) => index != action.key ? item : {
                ...item,
                multiPrice: action.multiPrice,
                count: action.count
            })
        default:
            return state;
    }
}

export default basketReduc