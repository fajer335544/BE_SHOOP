const mongoose=require('mongoose');
const Schema=mongoose.Schema;


const Warehouse_Schema =new Schema({
  
 
 name:{
     type:String,
     required:true
 },

 password:{type:String, required:true},

 phone:{type:String, required:true},

 address:{
  type:String,
  require:true
 },



     
 
 }, { timestamps: true })
 module.exports=mongoose.model('WARE_HOUSE',Warehouse_Schema);