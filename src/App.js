import React from 'react'
import './App.css'
import Login from './component/Login'
import socket from './socket'
import reducer from './component/reducer'
import Chat from './component/Chat'
import axios from 'axios'

function App() {
  const [state, dispatch] = React.useReducer(reducer, {
    joined: false,
    roomId: null,
    userName: null,
    users: [],
    messages: [],
  })

  const onLogin = async (obj) => {
    dispatch({
      type: 'JOINED',
      payload: obj,
    })
    socket.emit('ROOM:JOIN', obj)
    const { data } = await axios.get(`/rooms/${obj.roomId}`)
    console.log()
    setUsers(data.users)
  }

  const setUsers = (users) => {
    dispatch({
      type: 'SET_USERS',
      payload: users,
    })
  }

  const addMessage = (message) => {
    dispatch({
      type: 'NEW_MESSAGE',
      payload: message,
    })
  }

  React.useEffect(() => {
    socket.on('ROOM:JOINED', (users) => {
      setUsers(users)
    })

    socket.on('ROOM:SET_USERS', (users) => {
      setUsers(users)
    })
    socket.on('ROOM:NEW_MESSAGE', (message) => {
      addMessage(message)
    })
  }, [])

  window.socket = socket

  return (
    <div className={'app_wrapper'}>
      {!state.joined ? (
        <Login onLogin={onLogin} />
      ) : (
        <Chat
          roomId={state.roomId}
          messages={state.messages}
          {...state}
          onAddMessage={addMessage}
        />
      )}
    </div>
  )
}

export default App
