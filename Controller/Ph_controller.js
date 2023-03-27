

exports.test=(req,res,next)=>{
    console.log("test Controller");
   
    res.status(400).json({message:"test Controller   "});

}