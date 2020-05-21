'use strict'
const path = require('path')
const express = require('express')
const cors = require('cors')
const app = express();
const bodyParser = require('body-parser');
const config = require('./config')

const url = "mongodb://localhost:27017/restaurantdb";

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, 'static')));

const mongoose = require("mongoose");
const connect = mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('hello')
})

//Routes
app.use('/api', require('./routes/appetizers'));
app.use('/api', require('./routes/maindishes'));
app.use('/api', require('./routes/deserts'));
app.use('/api', require('./routes/wines'));
app.use('/api', require('./routes/drinks'));
app.use('/api', require('./routes/weddings'));
app.use('/api', require('./routes/corporateparties'));
app.use('/api', require('./routes/birthdays'));
app.use('/api', require('./routes/galleries'));

app.use('/api/reservations', require('./routes/reservations'));

const { host, port } = config

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`)
})
