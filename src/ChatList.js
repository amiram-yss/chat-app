import users from "./server info/Users";
import ChatTile from "./ChatTile";
import './ChatList.css'
function ChatList() {
    var usersList = users.map((user, key) => {
        return (
            <ChatTile
                unreadCounter='12'
                profPic={user.pic}
                lastMessageTime='18:09'
                chatTitle={user.userName}
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