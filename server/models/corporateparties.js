const mongoose = require('mongoose');

const corporateparties = mongoose.Schema({

  id: {type: Number},
  img: {type: String},

}, { versionKey: false });

const Corporateparties = mongoose.model('corporateparties', corporateparties);

module.exports = { Corporateparties }
