const express = require('express');
const router = express.Router();
const { Wines } = require("../models/wines");


router.get('/wines', (req, res)=>{



  (async () => {
    let rest = await Wines.find({});
    console.log(rest);
    res.send(rest)

  })();

});

router.get('/wines/:id', (req, res)=>{


  (async () => {
    let rest = await Wines.findOne({id: req.params.id});
    console.log(rest);
    res.send(rest)

  })();

});

module.exports = router;
