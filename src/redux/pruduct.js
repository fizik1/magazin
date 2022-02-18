let producttype = 'product'

let initialState = []

const productRudec = (state=initialState, action)=>{
    switch (action.type) {
        case producttype:
            state=[]
            return [...state,action.productitem]
        default:
            return state;
    }
}


export default productRudec