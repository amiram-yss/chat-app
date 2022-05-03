import users from '../server info/Users.js'
import Message from './Message.js'
import User from './User.js'

class Server {

    constructor() {
        this.loginDB = new Map()
        this.userDB = new Map()
    }

    initialize() {
        for (let i = 0; i < users.length; i++) {
            //this.loginDB.set(users[i].userName, users[i].pass)
            //this.userDB.set(users[i], new User(users[i].userName, users[i].pic))
            this.register(users[i].userName, users[i].pass, users[i].pic)
        }
        this.userDB.get("Krabs").addContact(this.userDB.get("Spongebob"))
        this.userDB.get("Krabs").chats[0].sendMessage
            ({
                content: "Krusty Krab?",
                time: "11:30",
                addresser: this.userDB.get("Krabs"),
                addressee: this.userDB.get("Spongebob")
            })
        this.userDB.get("Krabs").chats[0].sendMessage
            ({
                content: "KrAsty CrUb!!",
                time: "11:33",
                addresser: this.userDB.get("Spongebob"),
                addressee: this.userDB.get("Krabs")
            })
        this.userDB.get("Krabs").chats[0].sendMessage
            ({
                content: "Rusty cab :D!!",
                time: "11:36",
                addresser: this.userDB.get("Krabs"),
                addressee: this.userDB.get("Spongebob")
            })
        this.userDB.get("Krabs").addContact(this.userDB.get("Squidward"))
        this.userDB.get("Krabs").chats[1].sendMessage({
            content: "Shut UP",
            time: "11:45",
            addresser: "Krabs",
            addressee: "Squidward",
            type: type
        })

    }

    register(name, password, pic) {
        if (!this.userDB.has(name)) {

            this.loginDB.set(name, password)
            this.userDB.set(name, new User(name, pic, this))
            return true
        }
        else {
            return false
        }
    }

    searchUser(name) {
        return this.userDB.has(name)
    }

    loggingIn(userName, password) {
        if (this.searchUser(userName) && this.loginDB.get(userName) === password) {
            return this.userDB.get(userName)
        }
        else {
            return null
        }
    }


    BoolLoggingIn(userName, password) {
        if (this.searchUser(userName) && this.loginDB.get(userName) === password) {
            return true
        }
        else {
            return false
        }
    }


    GetUserByName(userName){
        if(this.searchUser(userName) ){
            return this.userDB.get(userName)
        }
        else {
            return null
        }
    }

    upload(filePath){
        
    }

} export default Server