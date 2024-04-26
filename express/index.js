import express from "express"
// console.log(`🚀 ~ express:`, express)
const app=express()
// console.log(`🚀 ~ app:`, app)

app.get("/",(peticion, respuesta)=>{
  respuesta.send("hola desde express")
})

app.post("/",(peticion, respuesta)=>{
  respuesta.send("post desde express")
})


const server=app.listen(8080,() => {
  console.log(`Servidor activo en http://localhost:${server.address().port}`);
});
