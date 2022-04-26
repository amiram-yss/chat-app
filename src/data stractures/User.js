import users from '../server info/Users.js'
import Chat from './Chat.js'
import Server from './Server.js'

console.log("hahaha")
let server = new Server()
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
        this.contacts = new Map()
        this.chats = new Array()
    } 
    
    addContact(user) {
        if (server.searchUser(user.name) && !this.contacts.has(user.name)) {
            this.contacts.set(user.name, user)
            let chat = new Chat([this, user])
            user.contacts.set(this.name, this)
            this.chats.push(chat)
            user.addChat(chat)
        }        
    }
    createChat(users) {
        for(let i = 0; i < users.length;i++){
            if(server.searchUser(users[i].name)==false) return
        }
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
    console.log(user.contacts.keys())

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
    server.addUser("haha", "password", "jjjj.png")
    array[0].addContact(new User("haha", "jjjj.png"))
    array.forEach(consoleUser)
}
export default User
main()





