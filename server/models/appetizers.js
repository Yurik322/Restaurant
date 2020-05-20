const mongoose = require('mongoose');

//const Genre = mongoose.Schema({ nameOfGenre: {type: String} });

const appetizers = mongoose.Schema({

  id: {type: Number},
  name: {type: String},
  gram: {type: String},
  money: {type: String},
  img: {type: String},

}, { versionKey: false });

const Appetizer = mongoose.model('appetizers', appetizers);

module.exports = { Appetizer }
