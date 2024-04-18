function uno() {
  return "uno";
}
// setTimeout(() => console.log("time 1"), 1000);
// setTimeout(() => console.log("time 2"), 0);
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

// console.log(uno());
// console.log(dos());
// // console.log(tres(3).then(param=>param))
// tres(4)
//   .then((param) => console.log(param))
//   .catch((error) => console.log(error));

// cuatro()
// .then((response) => response.json())
// .then((json) => console.log(json))
// .catch(error=>console.log(error))
// ----------------------------------

async function obtenerTitulos() {
  return fetch("https://jsonplaceholder.typicode.com/posts");
}

// console.log(obtenerTitulos())
obtenerTitulos();
// .then((posts) => posts.json())
// .then((data) => {
//   const post = data.slice(0, 10).map((element) => element.title);
//   console.log(`🚀 ~ .then ~ post:`, post);
// })
// .catch((e) => console.log({ code: e.cause.code, error: e.cause.errno }))
// .finally(() => console.log("fin"));

const postUser5 = async () => {
  try {
    const post = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await post.json();
    const userId5 = data.filter((element) => element.userId == 5);
    // console.log(`🚀 ~ postUser5 ~ post:`, userId5);
    return userId5
  } catch (error) {
    console.log(`🚀 ~ postUser5 ~ error:`, error);
  } finally {
    console.log("fin");
  }
};

postUser5()
