
import ChatTile from "./ChatTile";
import './Time'
import timeStringForComponents from './Time'

function ChatList(args) {// args.User, args.changeActiveChat
    args.User.chats.sort((chat1, chat2) => {
        if (chat1.getLastMessage().time < chat2.getLastMessage().time)
            return 1
        return -1})

    var usersList = args.User.chats.map(chat => {
        let users = chat.users
        let pic = ""
        let name = ""
        if (users[0].name === args.User.name) {
            pic = users[1].picture
            name = users[1].name
        }
        else {
            pic = users[0].picture
            name = users[0].name
        }
        let lstMsg = chat.getLastMessage()
        let time = ''
        let content = ''
        if (lstMsg != undefined) {
            time = timeStringForComponents(lstMsg.time)
            content = lstMsg.content
        }
        return (
            <ChatTile
                unreadCounter={0}
                profPic={pic}
                lastMessageTime={time}
                chatTitle={name}
                lastMessage={content}
                changeActiveChat={args.changeActiveChat}
                User={args.User}
                key={name}
                isSelected={chat == args.chat}
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