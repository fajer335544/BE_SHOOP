const express =require('express');
const Router=express.Router();

const Warehouse_controller=require('../Controller/Warehouse_controller');
const IsAuth=require('../Middleware/IsAuth');


Router.get('/Ware_test',Warehouse_controller.test);

Router.post('/createProduct',Warehouse_controller.createProduct);

Router.post('/testToken',IsAuth,(req,res,next)=>{
    res.json({data:"done"});
});



module.exports=Router;