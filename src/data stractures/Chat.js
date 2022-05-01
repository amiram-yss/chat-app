import Message from './Message'
class Chat {

    constructor(users) {
        this.users = users
        this.messages = Array()
    }
    sendMessage(message) {
        this.messages.push(message)
    }
    getLastMessage() {
        return this.messages.at(-1)
    }
} export default Chat