'use strict'
const controller = {}

controller.newSala = (req, res, next) => {
  res.send('hola mundo')
  console.log('hola mundo')
}


module.exports.controller = controller