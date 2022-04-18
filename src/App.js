import logo from './logo.svg';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import ChatTile from './ChatTile';
import ChatTile2 from './ChatTile2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button>asdasd</Button>
        <ChatTile
          chatName='Patrick' lastMessage='Holla Muchacho' profilePicture='patrick.jpg'
          unreadCounter='10' timeLastMessage='19:46'></ChatTile>
        <ChatTile chatName='Spongebob' lastMessage='Holla' profilePicture='spongebob.jpg' 
        unreadCounter='99+' timeLastMessage='16.4.2022'></ChatTile>
        <ChatTile2></ChatTile2>

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
