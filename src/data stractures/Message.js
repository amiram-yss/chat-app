const Type = {text, picture, record, video}

class Message{
    constructor(addresser, adressee, type, previous) {
        this.addresser = addresser
        this.adressee = adressee
        this.type = type
        this.previous = previous
    }
}