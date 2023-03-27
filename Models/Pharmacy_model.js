const mogoose=require('mongoose');
const Schema=mogoose.Schema;


const Pharmacy_Schema =new Schema({
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
 module.exports=mongoose.model('PHARMACY',User_Schema);