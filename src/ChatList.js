import users from "./server info/users";
import ChatTile from "./ChatTile";
function ChatList() {
    var usersList = users.map((user, key) => {
        return (
            <ChatTile
                unreadCounter='12'
                profPic={user.pic}
                lastMessageTime='18:09'
                chatTitle={user.userName}
                lastMessage='JALLIFISHHHH :DDDDD'
            />
        )
    })
    return (
        <div>
            {usersList}
        </div>
    )
}

export default ChatList