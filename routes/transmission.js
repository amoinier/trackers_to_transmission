const express = require('express')
const Transmission = require('transmission')
const dotenv = require('dotenv')
const Router = express.Router()

dotenv.config()

let transmission = new Transmission({
  host: process.env.HOST,
  port: process.env.PORT,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  ssl: process.env.SSL,
  url: process.env.URL
})

Router.get('/', function (req, res) {
  if (!req.query.url) {
    return res.sendStatus(520).json({
      message: 'No link'
    })
  } else {
    transmission.addUrl(req.query.url, function (err, arg) {
      if (err) {
        return res.sendStatus(520).json({
          message: err
        })
      } else {
        return res.status(200).json({
          message: 'Ok'
        })
      }
    })
  }
})

module.exports = Router
