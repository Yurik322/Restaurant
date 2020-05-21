const mongoose = require('mongoose');


const reservations = mongoose.Schema({
  name: String,
  phone: String,
  date: String,
  time: String,
  quality: Number
}, {versionKey: false});

const Reservation = mongoose.model('reservations', reservations);

module.exports = {Reservation}
