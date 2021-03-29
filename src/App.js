import './App.css'
import io from 'socket.io-client'

function App() {
  const connectedSocket = () => {
    io('http://localhost:9999')
  }
  return (
    <div>
      <h1>HELLO</h1>
      <button onClick={connectedSocket}>CONNECTED</button>
    </div>
  )
}

export default App
