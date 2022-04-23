import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
//import './server info/Users'
import ChatTile from './ChatTile';
import users from './server info/users';

function App() {
  var usersList = users.map((user, key) => {
    return (
      <ChatTile
        unreadCounter='1'
        profPic={user.pic} //'patrick.jpg'
        lastMessageTime='18:09'
        chatTitle={user.userName}
        lastMessage='JALLIFISHHHH :DDDDD'
      />
    )
  })
  return (
    <div className="App">
      <header className="App-header">
        {usersList}
      </header>
    </div>
  );
}


export default App;
