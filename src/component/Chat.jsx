import React from 'react'

function Chat() {
  return (
    <div className="chat">
      <div className="chat-users">
        ROOM: <b></b>
        <hr />
        <b>ONLINE:</b>
        <ul></ul>
      </div>
      <div className="chat-messages">
        <div className="messages">
          <div className="message">
            <p></p>
            <div>
              <span></span>
            </div>
          </div>
        </div>
        <form>
          <textarea className="form-control" rows="3"></textarea>
          <button type="button" className="btn btn-primary">
            SEND
          </button>
        </form>
      </div>
    </div>
  )
}

export default Chat
