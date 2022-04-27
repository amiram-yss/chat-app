import users from '../server info/Users.js'
import User from './User.js'
class Server{
    constructor() {
        this.loginDB = new Map()
        this.userDB = new Map()
    }

    initialize(){
        for(let i = 0; i < users.length; i++) {
            //this.loginDB.set(users[i].userName, users[i].pass)
            //this.userDB.set(users[i], new User(users[i].userName, users[i].pic))
            this.register(users[i].userName, users[i].pass, users[i].pic)
        }
    }
    register(name, password, pic) {
        if(!this.userDB.has(name)) {
            this.loginDB.set(name, password)
            this.userDB.set(name, new User(name, pic, this))
        }
        else {
            return null
        }
    }
    searchUser(name) {
        return this.userDB.has(name)
    }
    loggingIn(userName, password){
        if(this.searchUser(userName) && this.loginDB(userName)===password){
            return this.userDB(userName)
        }
        else {
            return null
        }
    }

} export default Server