import users from '../server info/Users.js'
import Chat from './Chat.js'

console.log("hahaha")

class UserInfo {
    constructor(name, password) {
        this.name = name
        this.password = password
    }
}

class User {
    /**
     * Single user object
     * @param {*} name name of user (key val)
     * @param {*} picture picture
     * @param {*} password password
     */
    constructor(name, picture) {
        this.name = name
        this.picture = picture
        this.contacts = new Array()
        this.chats = new Array()
    }
    
    addContact(user) {
        let isFound = false
        for (let index = 0; index < this.contacts.length; index++) {
            if (this.contacts[index].name === user.name && this.contacts[index].picture === user.picture) {
                isFound = true
                break
            }
        }
        if (!isFound) {
            this.contacts.push(user)
            let chat = new Chat([this, user])
            user.contacts.push(this)
            this.chats.push(chat)
            user.addChat(chat)
        }        
    }
    createChat(users) {
        let chat = new Chat(users)
        for(let i = 0; i < users.length; i++){
            users[i].addChat(chat)
        }
    }
    addChat(chat) {
        this.chats.push(chat)
    }
}

function consoleUser(user, index) {
    console.log("USER:")
    console.log("===============")
    console.log(user.name)
    console.log("contacts:")
    for (let i = 0; i < user.contacts.length; i++) {
        
        console.log(user.contacts[i].name)
    }
    console.log("chats:")
    for (let i = 0; i < user.chats.length; i++) {
        console.log("chat " + i)
        for(let j = 0; j < user.chats[i].users.length; j++)
        console.log(user.chats[i].users[j].name)
    }
}

function main() {
    var array = new Array()
    let i
    let j
    for (i = 0; i < users.length; i++) {
        array.push(new User(users[i].userName, users[i].pic))
    }
    for (i = 0; i < array.length; i++) {
        for (j = 0; j < array.length; j++) {
            if (i != j) {
                array[i].addContact(array[j])
            }
        }
    }
    array[0].createChat(array)
    array.forEach(consoleUser)
}

main()





