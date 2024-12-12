const Employe=require('../model/Employe')
const insertEmp=async(req,res)=>{
    const{name,role,sal}=req.body
    try{
        const obi=new Employe({name,role,sal})
        await object.save()
        res.status(200).json(obj)
    }
    catch(err){
        console.log("error",err)
        res.status(500).json({message:"error"})
    }
}
module.exports={insertEmp}
