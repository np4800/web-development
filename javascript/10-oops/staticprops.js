class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME: ${this.username} is logged in!`)
    }
    
    static createId(){
        return `${Math.floor(Math.random()*1000+1)}${this.username.toLowerCase()}`
    }
}

class Teacher extends User{
    constructor(username, email){
        this.super(username)
        this.email = email
    }


}

const nikhil = new User("Nikhil")
nikhil.logMe()

const ankita = new User("Ankita")
ankita.logMe()
ankita.createId() // this will error out due the static keyword where the class does not allow the static functions to be accessed outside of the class=