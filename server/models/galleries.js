const mongoose = require('mongoose');

const galleries = mongoose.Schema({

  id: {type: Number},
  name: {type: String},
  img: {type: String},

}, { versionKey: false });

const Galleries = mongoose.model('galleries', galleries);

module.exports = { Galleries }
