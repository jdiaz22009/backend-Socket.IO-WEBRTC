'use strict'
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const router =  require('../routes/router')
const socketIo = require('socket.io')



//init app
const app = express()

// middlewares
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use( (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(cors())
app.use(morgan('dev'))


// routes
router(app)
module.exports.app = app

