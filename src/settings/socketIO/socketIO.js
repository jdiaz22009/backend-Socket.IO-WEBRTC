'use strict'
const socketIO = require('socket.io')
module.exports = (http) => {
  const io = socketIO(http)

  io.on('connection', function (socket) {
    socket.on('join', function (data) {
      console.log(data,'data2')
      socket.join(data.roomId);
      socket.room = data.roomId;
      const sockets = io.of('/').in().adapter.rooms[data.roomId];
      console.log(socket,'sockets')
      if (sockets.length === 1) {
        socket.emit('init')
      } else {
        if (sockets.length === 2) {
          io.to(data.roomId).emit('ready')
        } else {
          socket.room = null
          socket.leave(data.roomId)
          socket.emit('full')
        }

      }
    });
    socket.on('signal', (data) => {
      console.log(data,'data')
      io.to(data.room).emit('desc', data.desc)
    })
    socket.on('disconnect', () => {
      const roomId = Object.keys(socket.adapter.rooms)[0]
      console.log('roomId', roomId)
      if (socket.room) {
        io.to(socket.room).emit('disconnected')
      }

    })
  });

}