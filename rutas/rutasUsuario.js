import { Router } from "express";
const rutasUsuario = Router();

rutasUsuario.get("/", (req, res) => {
  res.send("get all usuarios ");
});
rutasUsuario.get("/:id", (req, res) => {
  res.send("get  usuarios  por id");

});
rutasUsuario.post("/", (req, res) => {
  res.send("post  usuario ");
});
rutasUsuario.put("/:id", (req, res) => {
  res.send("put usuario ");
});
rutasUsuario.delete("/:id", (req, res) => {
  res.send("delete usuario ");
});

export default rutasUsuario;
