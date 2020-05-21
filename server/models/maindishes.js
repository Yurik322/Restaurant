const mongoose = require('mongoose');

const maindishes = mongoose.Schema({

  id: {type: Number},
  name: {type: String},
  gram: {type: String},
  money: {type: String},
  img: {type: String},

}, { versionKey: false });

const Maindishes = mongoose.model('maindishes', maindishes);

module.exports = { Maindishes }
