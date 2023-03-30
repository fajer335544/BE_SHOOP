
const Product=require('./../Models/productModel')
exports.test=(req,res,next)=>{
    console.log("test Controller");
    res.status(400).json({message:"ware house test Controller"});
    
}

exports.createProduct=(req,res,next)=>{

    const name = req.body.name;
    const price= req.body.price;
    const description= req.body.description;
    const offer=req.body.offer;


    const product=new Product({
        name: name,
        price: price, 
        description:description,
        if(offer){
        offer:offer
        }
          

    })     
 product
 .save()
 /*.then(resulte=>{
console.log(resulte);
return User.findById(req.userId)
 }).then(user=>{
  creator=user;
    user.posts.push(post)
  
  return user.save()
    

 })*/
 .then(result=>{ 
  
    res.status(201).json({
  message:'Post created successfully'
})})
 .catch(err => {

    if(!err.statusCode)
    {
        err.statusCode =500;
    }
    next(err);
  });


}