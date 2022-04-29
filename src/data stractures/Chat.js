import Message from './Message'
class Chat {

    constructor(users) {
        this.users = users
        this.messages = Array()
    }
    sendMessage(message) {
        this.messages.push(message)
    }
} export default Chat