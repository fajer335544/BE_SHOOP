const mogoose=require('mongoose');
const Schema=mogoose.Schema;


const Warehouse_Schema =new Schema({
    email:{
     type:String,
     required:true,
    },
    password:{type:String, required:true},
    
 
 name:{
     type:String,
     required:true
 },
 address:{
  type:String,
  require:true
 },



     
 
 }, { timestamps: true })
 module.exports=mongoose.model('WARE_HOUSE',Warehouse_Schema);