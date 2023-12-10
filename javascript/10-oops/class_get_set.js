class User {
    constructor(email, password){
        this.email = email,
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value) {
        this._email = value
    }
}

const chai =  new User("chai@example.com", "123")
console.log(chai.email)