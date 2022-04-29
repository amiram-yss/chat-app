
import ChatTile from "./ChatTile";
import './ChatList.css'

function ChatList(User) {
    
    var usersList = User.User.User.chats.map(chat => {
        
        let users = chat.users
        //console.log(users[0])
        let pic = ""
        let name = ""
        if(users[0].name === User.User.User.name) {
            pic = users[1].picture
            name = users[1].name
        }
        else {
            pic = users[0].picture
            name = users[0].name
        }
        return (
            <ChatTile
                unreadCounter='12'
                profPic={pic}
                lastMessageTime='18:09'
                chatTitle={name}
                lastMessage='abcdefghijklmnopqrstuvwxyz1234567890'
            />
        )
    })
    return (
        <div className="lst">
            {usersList}
        </div>
    )
}

export default ChatList