const dbURL = 'mongodb://localhost:27017/products'
// const dbURL = "mongodb+srv://shahob:XuCPO0HJkdh1Lhxc@cluster0.ctlsh.mongodb.net/products"

const mongoose = require('mongoose')

const connectDB = async ()=>{
    const connecting = await mongoose.connect(dbURL, {
        useNewUrlParser:true,
        useUnifiedTopology: true
    })

    console.log(`mongodb connected to : ${connecting.connection.host}`);
}


module.exports = connectDB