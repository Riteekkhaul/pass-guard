// Dependency import
const mongoose = require('mongoose');

// Create Schema
const AccountSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  account: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
   userId:{
     type:String,
     required:true
   },
  register_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Account = mongoose.model('account', AccountSchema);