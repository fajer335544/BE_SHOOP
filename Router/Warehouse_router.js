const express =require('express');
const Router=express.Router();

const Warehouse_controller=require('../Controller/Warehouse_controller');


Router.get('/Ware_test',Warehouse_controller.test);



module.exports=Router;