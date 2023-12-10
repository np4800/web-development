const promiseOne = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Async Call Completed")
        resolve()
    },1000)
})

promiseOne.then(()=>{
    console.log("Promise Completed")
})

const promiseTwo = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Async Call 2 Completed")
    },1000)
}).then(()=>{
    console.log("Promise 2 Completed")
})

const promiseThree = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true
        if (!error){
            resolve({userName: "Nikhil", email: "chai@example.com"})
        } else {
            reject("ERROR: Something went wrong!")
        }
        
    },1000)
}).then((user)=>{
    console.log(user)
    return user.userName
}).then((username)=>{
    console.log(`${username}`)
}).catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log("DB Connection Closed")
})

const promiseFour = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({userName: "Sneha", email: "chai@example.com"})
    },1000)
}).then((user)=> {
    console.log(user)
})

const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(()=> {
        let error = false
        if (!error) {
            resolve({username: "Shamaila", password: "ffkkme"})
        } else {
            reject("ERROR: Oops! you are not wet")
        }
    },1000)
});


//async does not handle the error response explicity therefore, you have to put it into try catch block!
async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response)
    }catch(error){
        console.log(error)
    }
}
consumePromiseFive()


async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data)    
    } catch (error) {
        console.log('E: ',error)
    }
    
}

getAllUsers()




// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response)=>{
//     return response.json()
// }).then((data)=>{
//     console.log(data)
// }).catch((error)=>{
//     console.log("E: ", error)
// })