const mongoose = require('mongoose');

const drinks = mongoose.Schema({

  id: {type: Number},
  name: {type: String},
  gram: {type: String},
  money: {type: String},
  img: {type: String},

}, { versionKey: false });

const Drinks = mongoose.model('drinks', drinks);

module.exports = { Drinks }
