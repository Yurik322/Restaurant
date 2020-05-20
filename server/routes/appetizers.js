const express = require('express');
const router = express.Router();
const { Appetizer } = require("../models/appetizers");


router.get('/appetizers', (req, res)=>{



  (async () => {
    let rest = await Appetizer.find({});
    console.log(rest);
    res.send(rest)

  })();

});

router.get('/appetizers/:id', (req, res)=>{


  (async () => {
    let rest = await Appetizer.findOne({id: req.params.id});
    console.log(rest);
    res.send(rest)

  })();

});

module.exports = router;
