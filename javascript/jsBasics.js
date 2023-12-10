console.log("02 - DataTypes");

console.table([typeof(undefined),typeof(null)])

let score = 33
let isLoggedIn = 1
let booleanConvert = Boolean(isLoggedIn)
console.table([typeof(score),typeof(booleanConvert)]);

let strings = "44dd"
let convertStringToNumber = Number(strings)
let convertNumberToString = String(score)

console.table([typeof(convertStringToNumber),typeof(convertNumberToString), convertStringToNumber]);


let number = 100
number++
console.log(number++)
console.log(++number)

// You can check the documentation of postfix and prefix MDM.

console.log("Dataytypes");

// Reference  (Non Primitive)
// Array, Objects, Functions
let userEmail;
console.log(typeof(userEmail));

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id === anotherid);


// -------------------------------------------------------
console.log("Stack And Heap");

// Stack (Used for Primitive Datatype)
//  Whenever you declare a variable you get a copy of it.
// Heap  (Used for Non-Primitive Dataypte )
//  Whenever there a memory is defined the Heap you get the reference of the object therefore whenever you change any value in the object it updates the original value.

let myName = "Nikhil"
let yourName = myName
yourName = "Sneha"

console.table([yourName, myName]);

let userOne = {
    email: "nikhil@example.com",
    upi: "nike@sbi.com"
}

let userTwo = userOne
userTwo.email = "sneha@example.com"
console.table([userTwo, userOne])

//-------------------------------------------------------------------------
console.log("About Strings ...");
const gameName = new String("hitesh-chaudhary")
const newString = gameName.substring(0,4)
console.log(newString);

const newStringOne = "   hitesh   "
console.log(newStringOne.trimEnd());
console.log(newStringOne.trimStart()+"hello");

const url = "https://hitesh.com/hitest%chaudhary"
console.log(url.replace("%","-"))


//-------------------------------------------------------------------------
console.log("Numbers & Math ...")
// Check important min max random number generation

//-------------------------------------------------------------------------
console.log("Date & Time ...")
const myDate = new Date()
console.log(myDate.toJSON())
console.table([
    myDate.toDateString(),
    myDate.toISOString(),
    myDate.toJSON(),
    myDate.toString(),
    typeof(myDate)
])

const myTimeStamp = Date.now()
console.log(Math.floor(myTimeStamp/1000))

const newDate = new Date()
console.log(newDate)
console.log(newDate.getDay())

newDate.toLocaleDateString('default', {
    weekday: 'long'
})
//-----------------------Basic Ends Here--------------------------------------------------


//-----------------------Basics II starts now---------------------------------------------
console.log("About Arrays ...")

const myArray = new Array(0,1,2,3,4,5)

myArray.unshift(9)
console.log(myArray)
myArray.shift()
console.log(myArray)

const neArray = new Array(2,3,4,5)
const result = neArray.join()
console.table([result, typeof(result)])

console.log("Difference between slice and splice...")
console.log("Orginal: ", myArray)
const myNewArr1 = myArray.slice(1,3)
console.log("A ", myNewArr1)

const myNewArr2 = myArray.splice(1,3)
console.log("Orginal: ", myArray) 
// Here is the catch the orignal array gets changed and reduces by the number of elements that are part of splice range. 
// So in theory splice alters the orignal array and removes the portion that you have specified in the splice range. 
// But this does not happen in slice the original array still remains intact.
// Concept of the call by reference and copy by reference more or less.
console.log("B ", myNewArr2)


console.log("Concatenation, Merge, Spread of Array ...")
const marvelHeros = ["thor","ironman","thanos"]
const dcHeros = ["batman","superman","wonderwoman"]
// console.log("By Push Method: ", marvelHeros.push(dcHeros))
// console.log("By Concate Method: ", marvelHeros.concat(dcHeros))

const allHeros = [...marvelHeros,...dcHeros]
console.log("By Spred Method: ", allHeros)


console.log("Flatten the Array ...")

const newArr = [1,2,[4,5],[1,4,[0,9]]]
const anotherArr = newArr.flat(Infinity)
console.log(anotherArr)

console.log(Array.isArray("ABCDEF"))
console.log(Array.from("ABCDEF"))

const score1 = 100
const score2 = 300
const score3 = 500

console.log(Array.of(score1,score2,score3))

console.log(Array.from({name: "Sneha"}))


console.log("Objects ...")

// The objects that we create from a constructor are called as Singleton objects.
        // Object.create -> this way you can create it as a singleton object
// The objects that we create directly are called object literals

const mySymbol = Symbol("key1")
const userInfo = {
    name: "Sneha",
    "full name": "Sneha Bajaj",
    age: 38,
    [mySymbol]: "myFirstKey",
    location: "US",
    isLoggedIn: false,
    lastLogin: ["Sunday", "Monday"]
}

console.log("1st Method to access elements of object: ", userInfo["name"])
console.log("2nd Method to access elements of obejct: ", userInfo.name)
console.log("Interesting as the key is also double quoted: ", userInfo["full name"])


console.log("Adding funciton into the object...")

userInfo.greet = () => {
    console.log(`Hello, ${this.name}`)
}
userInfo.greet2 = () => {
    console.log("Hello Sneha from normal")
}
console.log(userInfo.greet)
console.log(userInfo.greet())
console.log(userInfo.greet2())
// console.log(userInfo.greet(this.name))
console.log("Symbol is also a primitive datatype that can be included into the object but check out how you can access it. This is an interview question")
console.log("Notice the typeof mySymbol: ", userInfo[mySymbol], typeof(userInfo[mySymbol]))
Object.freeze(userInfo)
userInfo.name = "Shamaila"
console.log("We tried to update the freezed object but it did not allow us to do that.")
console.log(userInfo)

const myObject = Object.create({})
console.log(myObject)
myObject.id = "123j"
myObject.isLoggedIn = false

console.log(myObject)

const regularObj = {
    fullName: {
        userFullName: {
            fname: "Nikhil",
            lname: "Patel"
        }
    }
}

console.log([regularObj, regularObj.fullName, regularObj.fullName.userFullName, regularObj.fullName.userFullName.fname])

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"d"}
const obj3 = {6:"d", 8:"p"}
const obj4 = Object.assign({},obj1,obj2,obj3)
console.log(obj4)

const obj5 = {...obj1,...obj2}
// Combining the objects using the spread operator
console.log(obj5)


users = [
    {
        id:1,
        name:"Nikhil"
    },
    {
        id:2,
        name:"Sneha"
    }
]

console.log(Object.keys(users))
// Using entries method JS converts it into the array where first element is key and 2nd elemetn is value
console.log(Object.entries(users))
// To check if the property exits int he object use hasOwnProperty method
console.log(users.hasOwnProperty('4'))

const course = {
    coursename: "JS",
    price: "999",
    courseInstructor: "Hitesh"
}

const {courseInstructor: instructor} = course
console.log(instructor)


function calPrice1(...num1) {
    return num1
}

console.log(calPrice1(200,200,400,1000))

function calPrice2(val1,val2,...num1) {
    return num1
}

console.log(calPrice2(200,200,400,1000))


const user = {
    username: "Nikhil",
    prices: 400
}

function handleObject(anyObject) {
    console.log(`User: ${anyObject.username} - Price: ${anyObject.price}`)
}

console.log(handleObject(user))


// ------------------------------------------------------------------------------

console.log("Scopes...")

if (true){
    var a = 9;
    let b = 0;
    const c = 8;
}

console.log(a)
// console.log(b)
// console.log(c)

// -----------------------Interesting concept -----------------------------------
console.log(addOne(4))

function addOne(num){
    return num + 1
}

// You cannot access the function variable before declaring it. It follows the simple concept of variable declaration.
// console.log(addTwo(4))

const addTwo = function(num){
    return num*10
}

// The function can be also variablised and access like a function this is feature of JS
console.log(addTwo(4))

//--------------------- this concept vv important --------------------------------------------
console.log("this keyword ...")
const userRand = {
    name: "Hitesh",
    price: 999,
    welcomeMsg: function(){
        console.log(`${this.name}, welcome to JS tutorial!`)
        console.log(this)
    }
}
userRand.welcomeMsg()
userRand.name = "Sneha"
userRand.welcomeMsg()

console.log(this)

function chai() {
    const userName = "Sneha"
    console.log(this)
}

chai()

const chai2 = () => {
    const userName = "Sneha"
    console.log(this)
}
console.log("Note the difference in the output of arrow function and the normal function just above it")
chai2()

// Explicit Method
const add3 = (n1,n2) => {
    return n1 * n2
}
console.log(add3(10,10))

// Implicit methor of declaring arrow functions
const add4 = (n1,n2) => n1 * n2
console.log(add4(5,5))

// Object return in arrow function
const demoObj = () => {
    return {userName: "Sneha"}
}

console.log(demoObj())


//--------------------- IIFE --------------------------------------------
console.log("Immedieate Invoked Function Expressions (IIFE)...")
// Global scope pollutes the function, therefore IIFE were introduce inorder to avoid the global pollution of the functions and variables

// (function chai2(){ 3+4 })(); // Guess! this does not work in NodeJS version 18.x

// (()=>{7+8})();

// (
//     (name) => {
//         console.log(`${name} DB CONNECTED`)
//     }
// )('MONGODB');

//--------------------- JavaScript Execution Context --------------------------------------------
console.log("JavaScript Execution Context And CallStack!")
// Different Types of Contexts in JS:
//     1. Global Context : this keyword gets associated with the context, when you run JS in browser the context is window and you can refrence it with this keyword
//                         NodeJS has different context for this vs window on browser. vv important from ReactJS perspective.
//     2. Function Execution Context: 
//     3. Eval Execution Context: Related to Mongoose (MongoDB)

// Whenever JS is run it runs in 2 phases: 
//     1. Memory Creation Phase
//     2. Execution Phase

// -------------------Control flows--------------------------------------------------------------
// -------------------Control flows--------------------------------------------------------------
// -------------------High Order Array Loops-----------------------------------------------------
console.log("High Order Loops ...")
console.log("for loop for maps")
const map = new Map()

map.set('js',  "javascript")
map.set('py', "python")
map.set('rb', "Ruby")
console.log(map)

for (const [key,val] of map) {
    console.log(key,val)
}

console.log("foreach loop ...")
const coding = ["js","cpp","python","golang"]

coding.forEach((item)=>{
    console.log(item)
})

function printme(item){
    console.log(item)
}
coding.forEach(printme)

console.log("Print Array of Objects...")
const myCoding = [
    {
        langName: "Java",
        langFileName: "java"
    },
    {
        langName: "Ruby",
        langFileName: "rb"
    },
    {
        langName: "Python",
        langFileName: "py"
    },
]

myCoding.forEach(
    (obj)=>{
        console.log(obj.langName, obj.langFileName)
    }
)

console.log("forin loop for Objects ...")
const myObj = {
    js: "JavaScript",
    py: "Python",
    rb: "Ruby"
}

for (const key in myObj) {
    console.log(myObj[key])
}

console.log("forin loop for Arrays ...")
const programming = ["js", "python", "ruby"]
for (const key in programming) {
    console.log(programming[key])
}

//-----------------------Filter map and reduce----------------------------
console.log("Filter Map & Reduce ...")
const myNums = [1,2,3,4,5,6,7,8,9,10]
const newNums = myNums.filter((num)=>{
    return num>4
});
console.log(newNums)

const myNum = [1,2,3,4,5,6,7,8,9,10]
const neArr = myNum.map( (num)=>{ return num*10} )
console.log(neArr)


const myNumss = [1,2,3]
const myTotal = myNumss.reduce((acc,currval)=>{
    return acc + currval
},0)

console.log(myTotal)

const shoppingCart = [
    {
        itemName: "python",
        price: 999
    },
    {
        itemName: "javascript",
        price: 3999
    },
    {
        itemName: "MLAI",
        price: 45000
    }
]

const priceToPay = shoppingCart.reduce(
    (acc,item)=>{
        return acc + item.price
    }, 0
);
console.log(priceToPay);

