
import ChatTile from "./ChatTile";
import './ChatList.css'

function ChatList(args) {// args.User, args.changeActiveChat
    var usersList = args.User.chats.map(chat => {
        
        let users = chat.users
        let pic = ""
        let name = ""
        if(users[0].name === args.User.name) {
            pic = users[1].picture
            name = users[1].name
        }
        else {
            pic = users[0].picture
            name = users[0].name
        }
        var lstMsg = chat.getLastMessage()
        return (
            <ChatTile
                unreadCounter={0}
                profPic={pic}
                lastMessageTime={lstMsg.time}
                chatTitle={name}
                lastMessage={lstMsg.content}
                changeActiveChat = {args.changeActiveChat}
                User = {args.User}
                key = {name}
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