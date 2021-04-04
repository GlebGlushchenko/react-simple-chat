import React from 'react'

import axios from 'axios'

const Login = ({ onLogin }) => {
  const [roomId, setRoomId] = React.useState('')
  const [userName, setUserName] = React.useState('')
  const [isLoading, setIsLoading] = React.useState(false)

  const onEnter = async () => {
    if (!roomId || !userName) {
      return alert('Enter data pls')
    }
    const obj = { roomId, userName }
    setIsLoading(true)
    await axios.post('/rooms', obj)
    onLogin(obj)
  }

  const handlerKeyUp = (e) => {
    if (e.keyCode === 13) {
      onEnter()
    }
  }
  return (
    <div className="login">
      <h1 className={'login__title'}>Login</h1>
      <input
        onChange={(e) => {
          setRoomId(e.currentTarget.value)
        }}
        className={'login__input'}
        placeholder={'Room ID'}
        type="text"
        value={roomId}
      />
      <input
        onChange={(e) => {
          setUserName(e.currentTarget.value)
        }}
        className={'login__input'}
        placeholder={'Your name'}
        type="text"
        value={userName}
        onKeyUp={handlerKeyUp}
      />
      <button disabled={isLoading} onClick={onEnter} className={'login__btn'}>
        {isLoading ? 'ENTER....' : 'ENTER'}
      </button>
    </div>
  )
}

export default Login
