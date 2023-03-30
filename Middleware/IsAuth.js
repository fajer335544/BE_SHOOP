const jwt=require('jsonwebtoken');

module.exports=(req,res,next)=>{
   

   // const authHeader=req.headers["x-access-token"]
   // const token = authHeader && authHeader.split(' ')[1];
   const token =req.body.token || req.query.token || req.headers["x-access-token"];
    //return res.json({data:token})
    if(token== null)
    return  res.sendStatus(401);

    let decodedtoken;
    try{
        decodedtoken=jwt.verify(token,'somesupersecretsecret');
                                       

    }
    catch(err){
        err.statusCode=500;
        throw err
    }
    
    if(!decodedtoken)
    {
        const error =new Error('Not authenticated .')
        err.statusCode=401;
        throw err
    }
    req.userId=decodedtoken.userId;
    req.name=decodedtoken.name;
    console.log("req in is-auth :"+req.name);
    next(); 
}