const express = require('express');
const router = express.Router();
const { Deserts } = require("../models/deserts");


router.get('/deserts', (req, res)=>{

  (async () => {
    let rest = await Deserts.find({});
    res.send(rest)
  })();

});


router.get('/deserts/:id', (req, res)=>{

  (async () => {
    let rest = await Deserts.findOne({id: req.params.id});
    res.send(rest)
  })();

});

module.exports = router;
