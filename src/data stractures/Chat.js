class Chat {
    constructor(users) {
        this.users = users
        this.lastMessage = null
    }
    sendMessage(message) {
        if (this.lastMessage == null) {
            this.lastMessage = message
        }
        message.previous = this.lastMessage
        this.lastMessage = message
    }
}