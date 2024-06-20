const greetings = require("./functions/greetings");
// const searchMax=require("./functions/searchMax")
const { searchMax, numeros } = require("./functions/searchMax");
const sumArray = require("./functions/sumArray");
const abbrevName = require("./functions/abbrevName");
const oneProperty = require("./functions/oneProperty");
const searchStudents=require("./functions/searchStudents")
// console.log(`🚀 ~ searchMax:`, searchMax)
// console.log(require)

// greetings()
// const arr=[3,5,"b"]
// console.log(`🚀 ~ arr:`, {...arr})

// searchMax.searchMax([1,2,3])
// searchMax(numeros)

// destructuring
const data = {
  nick: "John",
  age: 30,
};
// const nick=data.nick
// const age= data.age
const { nick, age } = data;
// console.log(`🚀 ~ age:`, age)
// console.log(`🚀 ~ nick:`, nick)
// -----------------
// sumArray(numeros)
// -----------------
// abbrevName("camilo kuka canela chayane")
// -----------------
// oneProperty(
//   [
//     { name: "Kuka", edad: 3 },
//     { name: "Canela", edad: 4 },
//   ],
//   "name"
// );
// -----------------
const estudiantes = [
  { nombre: "Juan", edad: 17, curso: "Primero" },
  { nombre: "pepe", edad: 18, curso: "Primero" },
  { nombre: "Carlos", edad: 16, curso: "Primero" },
  { nombre: "María", edad: 19, curso: "Tercero" },
  
];
console.log("🚀 ~ estudiantes:", estudiantes)
searchStudents(estudiantes)
