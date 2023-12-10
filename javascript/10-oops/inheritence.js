class User {
    constructor(username){
        this.username = username
    }

    logMe() {
        console.log(`USERNAME: ${this.username} is logged in!`)
    }
}

class Teacher extends User {
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`A new Course was added by ${this.username}`)
    }
}

const chai = new Teacher("Nikihl", "nikhil@gmail.com", "admin")
chai.logMe()
chai.addCourse()

const masalaChai = new User("MasalaChai")
masalaChai.logMe()

console.log(chai === masalaChai)
console.log(chai instanceof Teacher)
console.log(masalaChai instanceof Teacher)