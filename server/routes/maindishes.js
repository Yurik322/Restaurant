const express = require('express');
const router = express.Router();
const { Maindishes } = require("../models/maindishes");


router.get('/maindishes', (req, res)=>{



  (async () => {
    let rest = await Maindishes.find({});
    console.log(rest);
    res.send(rest)

  })();

});

router.get('/maindishes/:id', (req, res)=>{


  (async () => {
    let rest = await Maindishes.findOne({id: req.params.id});
    console.log(rest);
    res.send(rest)

  })();

});

module.exports = router;
