const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name : {
    type : String,
    required : true
  },
  description : {
    type : String,
  },
  repo : {
    type : mongoose.Types.ObjectId,
    required : true
  },
  price : {
    type : Number,
    required : true
  }

})

const Product = mongoose.model('Product' , productSchema);

module.exports = Product;