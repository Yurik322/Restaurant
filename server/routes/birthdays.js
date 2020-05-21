const express = require('express');
const router = express.Router();
const { Birthdays } = require("../models/birthdays");


router.get('/birthdays', (req, res)=>{



  (async () => {
    let rest = await Birthdays.find({});
    console.log(rest);
    res.send(rest)

  })();

});

router.get('/birthdays/:id', (req, res)=>{


  (async () => {
    let rest = await Birthdays.findOne({id: req.params.id});
    console.log(rest);
    res.send(rest)

  })();

});

module.exports = router;
