const express = require('express');
const router = express.Router();
const { Deserts } = require("../models/deserts");


router.get('/deserts', (req, res)=>{



  (async () => {
    let rest = await Deserts.find({});
    console.log(rest);
    res.send(rest)

  })();

});

router.get('/deserts/:id', (req, res)=>{


  (async () => {
    let rest = await Deserts.findOne({id: req.params.id});
    console.log(rest);
    res.send(rest)

  })();

});

module.exports = router;
