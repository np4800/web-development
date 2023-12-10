const descrpiter = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descrpiter)


const chai = {
    name: "GingerChai",
    price: 44,
    isAvail: true,

    orderChai: function() {
        console.log("Ordered")
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"))

Object.defineProperty(chai, 'name', {
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key,value] of Object.entries(chai)) {
    if (typeof value !== 'function'){
        console.log(`${key} : ${value}`)
    }
}


