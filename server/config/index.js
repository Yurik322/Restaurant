'use strict'

if (process.env.NODE_ENV !== 'production') {
  const dotenv = require('dotenv')
  dotenv.config()
}

const env = process.env

module.exports = {
  host: env.HOST || 3000,
  port: env.PORT || 'localhost',
}
