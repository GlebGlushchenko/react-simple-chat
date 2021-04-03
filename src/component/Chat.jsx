import React from 'react'

function Chat({ users, messages }) {
  const [messageValue, setMessageValue] = React.useState('')
  console.log(users)
  return (
    <div className="chat">
      <div className="chat-users">
        ROOM: <b></b>
        <hr />
        <b>ONLINE:({users.length})</b>
        <ul>
          {users.map((userName, index) => (
            <li key={index}>{userName}</li>
          ))}
        </ul>
      </div>
      <div className="chat-messages">
        <div className="messages">
          <div className="message">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium deserunt dolor
              autem asperiores accusamus quibusdam ipsam similique magni eaque!
            </p>
            <div>
              <span>Test user</span>
            </div>
          </div>
          <div className="message">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium deserunt dolor
              autem asperiores accusamus quibusdam ipsam similique magni eaque!
            </p>
            <div>
              <span>Test user</span>
            </div>
          </div>
        </div>
        <form>
          <textarea
            onChange={(e) => setMessageValue(e.target.value)}
            value={messageValue}
            className="form-control"
            rows="3"></textarea>
          <button type="button" className="btn btn-primary">
            SEND
          </button>
        </form>
      </div>
    </div>
  )
}

export default Chat
