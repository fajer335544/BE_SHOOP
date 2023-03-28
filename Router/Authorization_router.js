
const express =require('express');
const Router=express.Router();



const {body}=require('express-validator/check');


const Authorizations=require('../Controller/Authorization');

Router.post('/signup',[


body('name').notEmpty().withMessage('Please enter a name '),
body('password')
            .isLength({ min: 8 })
            .custom((val, { req, loc, path }) => {
                if (val !== req.body.confirm_password) {
                    throw new Error("Passwords don't match");
                } else {
                    return val;
                }
            }),








],Authorizations.SignUp);




Router.post('/login',Authorizations.login);

module.exports=Router;