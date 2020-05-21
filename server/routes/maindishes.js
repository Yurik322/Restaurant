const express = require('express');
const router = express.Router();
const { Maindishes } = require("../models/maindishes");


router.get('/maindishes', (req, res)=>{

  (async () => {
    let rest = await Maindishes.find({});
    res.send(rest)
  })();

});


router.get('/maindishes/:id', (req, res)=>{

  (async () => {
    let rest = await Maindishes.findOne({id: req.params.id});
    res.send(rest)
  })();

});

module.exports = router;
