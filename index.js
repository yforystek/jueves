function uno() {
  return "uno";
}
setTimeout(() => console.log("time 1"), 1000);
setTimeout(() => console.log("time 2"), 0);
function dos() {
  return "dos";
}

function tres(param) {
  return new Promise((resolve, reject) => {
    if (param === 3) {
      resolve("tres");
    } else {
      reject("no es tres");
    }
  });
}
function cuatro() {
  return fetch("https://jsonplaceholder.typicode.com/todos/1");
  // .then(response => response.json())
  // .then(json => console.log(json))
}

console.log(uno());
console.log(dos());
// console.log(tres(3).then(param=>param))
tres(4)
  .then((param) => console.log(param))
  .catch((error) => console.log(error));
  
cuatro()
.then((response) => response.json())
.then((json) => console.log(json))
.catch(error=>console.log(error))
