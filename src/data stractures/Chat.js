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
    getAddresee(user) {
        if (user == this.users[0])
            return this.users[1]
        return this.users[0]
    }
} export default Chat