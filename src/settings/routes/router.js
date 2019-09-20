'use strict'

//import endopoints
const sala = require('../../api/videoChat').router

module.exports = (app) => {
  app.use('/api/v1/sala', sala)
}