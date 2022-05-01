
import ChatTile from "./ChatTile";
import './ChatList.css'

function ChatList(args) {// args.User, args.changeActiveChat
    console.log(args)
    var usersList = args.User.User.chats.map(chat => {
        
        let users = chat.users
        //console.log(users[0])
        let pic = ""
        let name = ""
        if(users[0].name === args.User.User.name) {
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
                changeActiveChat = {args.changeActiveChat}
                User = {args.User}
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