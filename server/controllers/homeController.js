const Product = require('../models/productModel')


exports.getFourProducts = async (req, res)=>{
    try {
        const products = await Product.find({})
        let collection = []
        for(let i = products.length-1;products.length-i<=4;i--){
            collection.push(products[i])
        }

        res.json(collection)
    } catch (error) {
        console.log(error)
    }
}