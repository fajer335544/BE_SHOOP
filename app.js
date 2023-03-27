const express=require('express');
const Ph_Router=require('./Router/Pharmacy_router');
const Warehouse_Router=require('./Router/Warehouse_router');
const app=express();
const bodyParser=require('body-parser');


app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS,DELETE,PATCH');
    res.setHeader('Access-Control-Allow-Headers','Content-Type,Authorizations');
    next();
    
    
    
    });


    app.use(Ph_Router);
    app.use(Warehouse_Router);
    app.listen(8080);