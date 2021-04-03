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
    users: [],
    messages: [],
  })

  const onLogin = (obj) => {
    dispatch({
      type: 'JOINED',
      payload: obj,
    })
    socket.emit('ROOM:JOIN', obj)
  }

  const setUsers = (users) => {
    dispatch({
      type: 'SET_USERS',
      payload: users,
    })
  }

  React.useEffect(() => {
    socket.on('ROOM:JOINED', (users) => {
      setUsers(users)
    })

    socket.on('ROOM:SET_USERS', (users) => {
      setUsers(users)
    })
  }, [])

  window.socket = socket

  return (
    <div className={'app_wrapper'}>
      {!state.joined ? (
        <Login onLogin={onLogin} />
      ) : (
        <Chat messages={state.messages} users={state.users} />
      )}
    </div>
  )
}

export default App
