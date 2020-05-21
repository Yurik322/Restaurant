const express = require('express');
const router = express.Router();
const { Galleries } = require("../models/galleries");

router.get('/galleries', (req, res)=>{

  (async () => {
    let rest = await Galleries.find({});
    res.send(rest)

  })();

});

router.get('/galleries/:id', (req, res)=>{

  (async () => {
    let rest = await Galleries.findOne({id: req.params.id});
    res.send(rest)
  })();

});

module.exports = router;
