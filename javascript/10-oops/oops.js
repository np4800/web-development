const user = {
    userName: "Nikhil",
    loginCount: 9,
    isLoggedIn: true,
    getUserDetails: ()=>{
        console.log(this)
    }
}

console.log(user)
console.log(user.userName)

function User(userName, loginCount, isLoggedIn){
    this.userName = userName;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greetings = ()=>{
        console.log(`Hello ${this.userName}`)
    }
}

const userOne = new User("Sneha", 12, true);
console.log(userOne)

const userTwo = new User('Nikhil', 11, false)
console.log(userTwo)

console.log(userOne.constructor)