const express = require('express')

const app = express()

const rooms = {
  rooms: [],
  messages: ['Hello'],
}

app.get('/users', function (req, res) {
  console.log('Hello1s')
  res.json(rooms)
})

app.listen(9999)
