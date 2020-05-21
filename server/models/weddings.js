const mongoose = require('mongoose');

const weddings = mongoose.Schema({

  id: {type: Number},
  img: {type: String},

}, { versionKey: false });

const Weddings = mongoose.model('weddings', weddings);

module.exports = { Weddings }
