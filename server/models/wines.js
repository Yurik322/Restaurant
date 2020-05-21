const mongoose = require('mongoose');

const wines = mongoose.Schema({

  id: {type: Number},
  name: {type: String},
  gram: {type: String},
  money: {type: String},
  img: {type: String},

}, { versionKey: false });

const Wines = mongoose.model('wines', wines);

module.exports = { Wines }
