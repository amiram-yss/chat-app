
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
        let lstMsg = chat.getLastMessage()
        console.log("last message")
        console.log(lstMsg)
        let time = null
        let content = null
        if(lstMsg != undefined) {
            time = lstMsg.time
            content = lstMsg.content
        }
        return (
            <ChatTile
                unreadCounter={0}
                profPic={pic}
                lastMessageTime={time}
                chatTitle={name}
                lastMessage={content}
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