import express from "express";
import path from "path";
import url from "url";
let count = 0;
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// console.log(`🚀 ~ express:`, express)
const app = express();
// console.log(`🚀 ~ app:`, app)
app.use(express.static("public"));

app.get("/", (peticion, respuesta) => {
  respuesta.send("hola desde express");
});

app.post("/", (peticion, respuesta) => {
  respuesta.send("post desde express");
});

app.get("/fecha", (req, res) => {
  const fecha = Date();
  res.send(`La fecha de hoy es ${fecha}`);
});
app.get("/count", (req, res) => {
  count++;
  res.send({ count });
});

app.get("/:archivo", (req, res) => {
  const archivo = req.params.archivo;
console.log(path.join(__dirname, "public",`${archivo}.html`))
  res.sendFile(path.join(__dirname, "public", `${archivo}.html`));
});

const server = app.listen(8080, () => {
  console.log(`Servidor activo en http://localhost:${server.address().port}`);
});
