import http from "node:http";
// console.log(`🚀 ~ http:`, http)

const server = http.createServer((peticion, respusta) => {
  if (peticion.method === "POST") {
    respusta.end("hola soy un post");
  } else if (peticion.method === "GET") {
    respusta.end("<h1>hola soy un get</h1>");
  }
  console.log(`🚀 ~ server ~ peticion:`, peticion.url)
  // console.log(`🚀 ~ server ~ respusta:`, respusta)
});
// console.log(`🚀 ~ server:`, server)

server.listen(8080, () => {
  console.log(`server ok http://localhost:8080`);
});
