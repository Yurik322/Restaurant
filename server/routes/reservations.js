const express = require('express');
const router = express.Router();
const { Reservation } = require("../models/reservations");

router.post('/', (req, res)=>{

  (async () => {


    //console.log(req.body)

    Reservation.create({
      name: req.body.name,
      phone: req.body.phone,
      date: req.body.date,
      time: req.body.time,
      quality: req.body.quality
    });

    let reservations = await Reservation.find({});
    res.send(reservations)


  })();

});


module.exports = router;
