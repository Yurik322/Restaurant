const express = require('express');
const router = express.Router();
const { Drinks } = require("../models/drinks");


router.get('/drinks', (req, res)=>{



  (async () => {
    let rest = await Drinks.find({});
    console.log(rest);
    res.send(rest)

  })();

});

router.get('/drinks/:id', (req, res)=>{


  (async () => {
    let rest = await Drinks.findOne({id: req.params.id});
    console.log(rest);
    res.send(rest)

  })();

});

module.exports = router;
