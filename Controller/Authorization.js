const Pharmacy=require('./../Models/Pharmacy_model');
const Warehouse=require('./../Models/Warhouse_model');
const {validationResult}=require('express-validator/check')

const jwt=require('jsonwebtoken')
const bcrypt=require('bcryptjs');

exports.SignUp=async(req,res,next)=>{
   
    
    const errors=validationResult(req);
   
    if( ! errors.isEmpty()){
        const error=new Error('Validation Failed ');
        console.log ('error message'+error.message);
       
        error.statusCode=422;
        error.data=errors.array()
        res.status(422).json({ErrorMessage:error});
        throw error 
    }
   
    const name=req.body.name;
    const password=req.body.password;
    const phone =req.body.phone;
    const address=req.body.address;
    //  const check_IF_NAME_EXECT_IN_DB =0;
    if (req.query.auth =="pharmacy"){
     const   check_IF_NAME_EXECT_IN_DB=await Pharmacy.findOne({name:name});
       if(check_IF_NAME_EXECT_IN_DB){
        return     res.status(422).json({message:"this data is already in use"});
       }
        
    bcrypt.hash(password,12)
    .then(hashedPassword=>{
        const pharmacy=new Pharmacy(
            {
                name:name,
                password:hashedPassword,
                phone:phone,
                address:address
            }
        )
        return pharmacy.save()

    })
    .then(pharmacy=>{

        res.status(201).json({message:'Welcome! You have successfully Signup',all_data_stored:pharmacy}
        )
    })
    .catch((err)=>{if(!err.statusCode){err.statusCode =500;}next(err);}

    )}





    if (req.query.auth =="warehouse"){

        const   check_IF_NAME_EXECT_IN_DB=await Warehouse.findOne({name:name});
        if(check_IF_NAME_EXECT_IN_DB){
            return  res.status(422).json({message:"this data is already in use"});
        }

        bcrypt.hash(password,12)
        .then(hashedPassword=>{
            const warehouse=new Warehouse(
                {
                    name:name,
                    password:hashedPassword,
                    phone:phone,
                    address:address
                }
            )
            return warehouse.save()
    
        })
        .then(warehouse=>{
    
            res.status(201).json({message:'Welcome! You have successfully Signup',all_data_stored:warehouse}
            )
        })
        .catch((err)=>{if(!err.statusCode){err.statusCode =500;}next(err);}
    
        )}



}


exports.login=(req,res,next)=>{
    console.log(req.body);
const name=req.body.name;
const password=req.body.password;

//res.json({data:password + name});

let load;
if (req.query.auth =="warehouse"){

    Warehouse.findOne({name:name})
.then(Warehouse=>{
    if(!Warehouse)
    {
        const error =new Error('Invalid Name');
        error.statusCode=401;
     
        throw error
    }
    load=Warehouse;
    //res.json({data:Warehouse});
    return  bcrypt.compare(password,Warehouse.password)
    
    

})
.then(resultOfBcrypt=>{
   if(!resultOfBcrypt)
   {
    const error =new Error('Wrong Password');
        error.statusCode=401;
        throw error
    }
    const token=jwt.sign({name:load.name,userId:load._id.toString()},'somesupersecretsecret',  {expiresIn:'1h'})

              console.log("this is token for this user \n:"+token +"\n loadUser._id.toString():\n"+ load._id.toString())

         res.status(200).json({token:token,userId:load._id.toString(),status:true})
})
.catch((err)=>{if(!err.statusCode){err.statusCode =500;}next(err)})
}


if (req.query.auth =="pharmacy"){

    Pharmacy.findOne({name:name})
.then(Pharmacy=>{
    if(!Pharmacy)
    {
        const error =new Error('Invalid Name');
        error.statusCode=401;
     
        throw error
    }
    load=Pharmacy;
   // res.json({data:Pharmacy});
    return  bcrypt.compare(password,Pharmacy.password)
    
    

})
.then(resultOfBcrypt=>{
   if(!resultOfBcrypt)
   {
    const error =new Error('Wrong Password');
        error.statusCode=401;
        throw error
    }
    const token=jwt.sign({name:load.name,userId:load._id.toString()},'somesupersecretsecret',  {expiresIn:'1h'})

              console.log("this is token for this user \n:"+token +"\n loadUser._id.toString():\n"+ load._id.toString())

         res.status(200).json({token:token,userId:load._id.toString(),status:true})
})
.catch((err)=>{if(!err.statusCode){err.statusCode =500;}next(err)})
}









}