

class Message{
    constructor(addresser, adressee, type, previous) {
        this.addresser = addresser
        this.adressee = adressee
        this.type = type
        this.previous = previous
    }
} export default Message