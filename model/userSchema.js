const mongoose = require('mongoose')

// const validator= require('validator')

const userSchema = new mongoose.Schema({


    name:{
        type:String,
        required:true,
    },
    mobile:{
        type:String,
        required:true,
        unique:true,
        minlength:10,
        maxlength:10
    },
    address:{
        type:String,
        required:true,
    },
    id:{
        type:String,
        required:true,
    }


})


//const model to store products
const users = new mongoose.model('users',userSchema)

//export model
module.exports = users