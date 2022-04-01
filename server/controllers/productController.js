const Product = require('../models/productModel')

const getProductByCategory = async (req, res)=>{
    try {
        const products = await Product.find({category:req.params.category})
        res.json(products)
    } catch (error) {
        console.log(error);
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
            multiPrice:req.body.price,
            category:req.body.category
        })
        await newProduct.save((err, productSaved) => {
            if (err) throw err
        })
        // console.log('env is :', process.env);
        res.redirect('http://localhost:3000')
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    addNewProduct,
    getProductByCategory
}