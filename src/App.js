import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import ChatTile from './ChatTile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ChatTile
          unreadCounter = '1'
          profPic = 'patrick.jpg'
          lastMessageTime = '18:09'
          chatTitle = 'pAtRiCk'
          lastMessage = 'JALLIFISHHHH :DDDDD'  
        />
      </header>
    </div>
  );
}

export default App;
