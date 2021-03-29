const express = require('express')
const useSocket = require('socket.io')

const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
    credential: true,
    transports: ['websocket'],
  },
})

const rooms = new Map([
  ['room', []],
  ['messages', []],
])

app.get('/rooms', (req, res) => {
  res.json(rooms)
})

io.on('connection', (socket) => {
  console.log('socket connected', socket.id)
})

server.listen(9999, (err) => {
  if (err) {
    throw Error(err)
  }
  console.log('Server started')
})
