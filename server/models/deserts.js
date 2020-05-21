const mongoose = require('mongoose');

const appetizers = mongoose.Schema({

  id: {type: Number},
  name: {type: String},
  gram: {type: String},
  money: {type: String},
  img: {type: String},

}, { versionKey: false });

const Deserts = mongoose.model('deserts', appetizers);

module.exports = { Deserts }
