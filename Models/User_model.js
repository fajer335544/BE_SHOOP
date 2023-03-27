const mogoose=require('mongoose');
const Schema=mogoose.Schema;


const User_Schema =new Schema({
    name:{
        type:String,
        required:true
    },
    name_warehouse:{
     type:String,
     required:false,
    },
    password:{type:String, required:true},
    
    phone:{type:String, required:true},

 address:{
  type:String,
  require:true
 },
 type:["Warehouse", "Pharmacy"],

 warehouses:[{
    type:Schema.Types.ObjectId,
    ref:'WARE_HOUSE'
}]



     
 
 }, { timestamps: true })
 module.exports=mongoose.model('USER',User_Schema);