const mongoose=require('mongoose');
const Schema=mongoose.Schema;


const Pharmacy_Schema =new Schema({
    name:{
        type:String,
        required:true
    },
  

    phone:{type:String, required:true},

 address:{
  type:String,
  require:true
 },
   pharmacistPhoto : String,

  pharmacyImage : String,
 

      password: {
    type: String,
    required: [true, 'please provide a password!'],
    minLength: 8,
    select: false
},
    
/*
confirmPassword: {
    type: String,
    required: [true, 'please provide a confirm password!'],
    validate: {
        validator: function(el) {
            return el === this.password;
        },
        message: 'passwords are not the same!'
    }
},*/

  repositories : {
    type : [mongoose.Types.ObjectId],
    ref : 'Repository'
  }
     
 
 }, { timestamps: true })
 module.exports=mongoose.model('PHARMACY',Pharmacy_Schema);