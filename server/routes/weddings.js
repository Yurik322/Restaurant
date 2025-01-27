const express = require('express');
const router = express.Router();
const { Weddings } = require("../models/weddings");


router.get('/weddings', (req, res)=>{

  (async () => {
    let rest = await Weddings.find({});
    res.send(rest)
  })();

});

router.get('/weddings/:id', (req, res)=>{

  (async () => {
    let rest = await Weddings.findOne({id: req.params.id});
    res.send(rest)
  })();

});

module.exports = router;
