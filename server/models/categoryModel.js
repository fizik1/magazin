const { Schema, model } = require('mongoose')

const categorySchema = new Schema({
    nomi:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required: true
    }
})

module.exports = model('Category', categorySchema)