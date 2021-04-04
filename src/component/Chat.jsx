import React from 'react'
import socket from '../socket'

function Chat({ users, messages, roomId, userName, onAddMessage }) {
  const [messageValue, setMessageValue] = React.useState('')
  const messagesRef = React.useRef(null)
  const onSendMessage = () => {
    socket.emit('ROOM:NEW_MESSAGE', {
      userName,
      roomId,
      text: messageValue,
    })

    onAddMessage({
      userName,
      text: messageValue,
    })
    setMessageValue('')
  }

  const handlerKeyUp = (e) => {
    if (e.keyCode === 13) {
      onSendMessage()
    }
  }
  React.useEffect(() => {
    messagesRef.current.scrollTo(0, 9999)
  }, [messages])
  return (
    <div className="chat">
      <div className="chat-users">
        ROOM: <b>{roomId}</b>
        <hr />
        <b>ONLINE:({users.length})</b>
        <ul>
          {users.map((userName, index) => (
            <li key={index}>{userName}</li>
          ))}
        </ul>
      </div>
      <div className="chat-messages">
        <div ref={messagesRef} className="messages">
          {messages.map((message, index) => (
            <div key={index} className="message">
              <p>{message.text}</p>
              <div>
                <span>{message.userName}</span>
              </div>
            </div>
          ))}
        </div>
        <form>
          <textarea
            onKeyUp={handlerKeyUp}
            onChange={(e) => setMessageValue(e.target.value)}
            value={messageValue}
            className="form-control"
            rows="3"></textarea>
          <button onClick={onSendMessage} type="button" className="btn btn-primary">
            SEND
          </button>
        </form>
      </div>
    </div>
  )
}

export default Chat
