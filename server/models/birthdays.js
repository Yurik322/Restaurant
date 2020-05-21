const mongoose = require('mongoose');

const birthdays = mongoose.Schema({

  id: {type: Number},
  img: {type: String},

}, { versionKey: false });

const Birthdays = mongoose.model('birthdays', birthdays);

module.exports = { Birthdays }
