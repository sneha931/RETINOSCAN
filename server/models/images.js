const mongoose=require('mongoose')
const imgschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    imagepath:{
        type:String,
        required:true
    },
    uploadedAt:{
        type:Date,
        default:Date.now()
    }
})
const imagesmodel=mongoose.model("imagesmodel",imgschema)
module.exports=imagesmodel;