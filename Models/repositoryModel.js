const mongoose = require('mongoose');

const repositorySchema = new mongoose.Schema({
  
  name : {
    type : String,
    required : [true , 'please enter your repo name'],
    unique : true,
  },
  address : {
    tpye : String,
    required : true
  },
  phone1 : {
    type : String,
    required : true
  },
  phone2 : {
    type : String,
    required : true
  },
  pharmacies : {
    type : [mongoose.Types.ObjectId],
    ref : 'Pharmacy'
  },
  repositoryImage : String,
  ownerImage : String,
})

const Repository = mongoose.model('Repository' , repositorySchema);

module.exports = Repository;