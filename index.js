const greetings = require("./functions/greetings");
// const searchMax=require("./functions/searchMax")
const {searchMax, numeros}=require("./functions/searchMax")
const sumArray=require("./functions/sumArray")
// console.log(`🚀 ~ searchMax:`, searchMax)
// console.log(require)

// greetings()
// const arr=[3,5,"b"]
// console.log(`🚀 ~ arr:`, {...arr})

// searchMax.searchMax([1,2,3])
searchMax(numeros)

// destructuring
const data = {
  nick: "John",
  age: 30,
};
// const nick=data.nick
// const age= data.age
const {nick, age}= data
console.log(`🚀 ~ age:`, age)
console.log(`🚀 ~ nick:`, nick)
// -----------------
sumArray(numeros)




