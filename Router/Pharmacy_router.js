const express =require('express');
const Router=express.Router();

const Ph_controller=require('../Controller/Ph_controller');


Router.get('/Ph_test',Ph_controller.test);



module.exports=Router;