import users from '../server info/Users.js'
import User from './User.js'
class Server{
    constructor() {
        this.db = new Map()
        for(let i = 0; i < users.length; i++) {
            this.db.set(users[i].userName, users[i])
        }
    }
    addUser(name, password, pic) {
        if(!this.db.has(name)) {
            this.db.set(name, {userName: name, pic: pic, pass: password})
        }
    }
    searchUser(name) {
        return this.db.has(name)
    }

} export default Server