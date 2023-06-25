const mongoose=require('mongoose')



const detailSchema=new mongoose.Schema({

    name:{
        type:String,
        required:true,
    },
    rating:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:String,
        required:true,
        unique:true
    },
    image:{
        type:String,
        required:true
    }





})

const details =new mongoose.model('details',detailSchema)

// export
module.exports=details