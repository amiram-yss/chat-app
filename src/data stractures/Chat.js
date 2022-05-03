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

    async upload(file, type, addresser, addressee) {
        let a = await this.convertBase64(file)
        console.log("this is base64", a)
        this.sendMessage({
            content: a,
            type: "rec",
            time: new Date(),
            addresser: addresser,
            addressee: addressee
        })
    }

    convertBase64(file) {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader()
            fileReader.readAsDataURL(file)
            fileReader.onload = () => {
                resolve(fileReader.result)
            }
            fileReader.onerror = (error) => {
                reject(error)
            }
        })
    }
} export default Chat