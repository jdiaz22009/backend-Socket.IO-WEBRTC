'use strict'
const app = require('./app').app
const http = require('http').createServer(app)
const path = require('path')
const socketIO = require('../socketIO/socketIO')
socketIO(http)

//INIT SERVER
const env = process.env.ENVIROMENT || 'dev'
const port = process.env.PORT || 3000
if (env === 'dev') {
  http.listen(port, () => {
    console.log(`[server] listening on port http://localhost:${port}, in mode ${env}`)
  })
} else {
  http.listen(port, () => {
    console.log(`[server] listening on port http://localhost:${port}, in mode ${env}`)
  })
}
