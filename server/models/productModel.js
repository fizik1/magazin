const { Schema, model } = require('mongoose')

const productSchema = new Schema({
    nomi: {
        type:String,
        required:true
    },
    img:{
        type:String,
        required: true
    },
    about:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required: true
    },
    multiPrice:{
        type:Number,
        required: true
    },
    category:{
        type:String,
        required:true
    }
})

module.exports = model('Product', productSchema)