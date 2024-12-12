const mongoose=require('mongoose')
const EmpSchema=new mongoose.Schema({
    name:{type:String,required:true},
    role:{type:String,required:true},
    sal:{type:Number,required:true}
})
module.exports=mongoose.model('Employe',EmpSchema)