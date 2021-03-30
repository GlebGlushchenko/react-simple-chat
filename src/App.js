import React from 'react'
import './App.css'
import Login from './component/Login'
import socket from './socket'
import reducer from './component/reducer'
import Chat from './component/Chat'

function App() {
  const [state, dispatch] = React.useReducer(reducer, {
    joined: false,
    roomId: null,
    userName: null,
  })

  const onLogin = (obj) => {
    dispatch({
      type: 'JOINED',
      payload: obj,
    })
    socket.emit('ROOM:JOIN', obj)
  }

  React.useEffect(() => {
    socket.on('ROOM:JOINED', (users) => {
      console.log('New user', users)
    })
  }, [])

  window.socket = socket

  return (
    <div className={'app_wrapper'}>{!state.joined ? <Login onLogin={onLogin} /> : <Chat />}</div>
  )
}

export default App
