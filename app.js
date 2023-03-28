const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');



const Ph_Router=require('./Router/Pharmacy_router');
const Warehouse_Router=require('./Router/Warehouse_router');
const Authorization_Router=require('./Router/Authorization_router');
const app=express();


const bodyParser=require('body-parser');
app.use(cors());


app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS,DELETE,PATCH');
    res.setHeader('Access-Control-Allow-Headers','Content-Type,Authorizations');
    next();
    
    
    
    });

    app.use(Authorization_Router);
    app.use(Ph_Router);
    app.use(Warehouse_Router);

    app.use('/query',(req,res,next)=>{
        if (req.query.auth =="pharmacy")
        res.json({query:"pharmacy"});
        else if(req.query.auth =="WareHouse")
        res.json({query:"WareHouse"});
    })
   


    
try{
    mongoose.connect('mongodb://0.0.0.0:27017/BE_SHOOP')

   const server=   app.listen(8080)
  

}
    catch(err){console.log(err)}