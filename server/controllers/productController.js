const Product = require('../models/productModel')


const getProducts = async (req, res)=>{
    try {
        const products = await Product.find({})
        // console.log(products.length);
        // for (let i =products.length-1;products.length-i>=1;i--){
        //     console.log(i);
        // }

        res.json(products)
    } catch (error) {
        console.log(error)
    }
}


const addNewProduct = async (req, res)=>{
    try {
        await console.log(req.body);
        const newProduct = await Product({
            nomi:req.body.nomi,
            img: req.body.img,
            price:req.body.price,
            about:req.body.about,
            multiPrice:req.body.price
        })
        await newProduct.save((err, productSaved) => {
            if (err) throw err
        })
        console.log('env is :', process.env);
        res.redirect(process.env.URL)
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    addNewProduct,
    getProducts
}