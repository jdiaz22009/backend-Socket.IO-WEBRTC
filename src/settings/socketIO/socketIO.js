'use strict'
const socketIO = require('socket.io')
module.exports = (http) => {
  const io = socketIO(http)

  io.on('connection',(client) =>{
    console.log('socket', client)
    client.emit('chat', { sala: 'holamundo' })
  })
  
}