const express = require('express');
const router = express.Router();
const { Corporateparties } = require("../models/corporateparties");


router.get('/corporateparties', (req, res)=>{



  (async () => {
    let rest = await Corporateparties.find({});
    console.log(rest);
    res.send(rest)

  })();

});

router.get('/corporateparties/:id', (req, res)=>{


  (async () => {
    let rest = await Corporateparties.findOne({id: req.params.id});
    console.log(rest);
    res.send(rest)

  })();

});

module.exports = router;
