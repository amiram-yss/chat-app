const Type = {text, picture, record, video}

class Message{
    constructor(addresser, adressee, type, content) {
        this.addresser = addresser
        this.adressee = adressee
        this.type = type
        this.content = content
    }
}