const Category = require('../models/categoryModel')

const addCategory = async (req, res)=>{
    try {
        const newCategory = await Category({
            nomi: req.body.category,
            img:req.body.img
        })
        await newCategory.save((err, catgorySaved) => {
            if (err) throw err
        })
        res.redirect('http://localhost:3000')
    } catch (error) {
        console.log(error);
    }
}

const getCategorys = async (req, res) => {
    try {
        const categorys = await Category.find({})
        res.json(categorys)
    } catch (error) {
        console.log(error);
    }
}



module.exports = { 
    addCategory,
    getCategorys
}