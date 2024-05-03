import { Router } from "express";
const rutasUsuario = Router();

rutasUsuario.get("/", (req, res) => {
  res.send("get all desde rutas usuarios ");
});
rutasUsuario.post("/", (req, res) => {
  console.log(`🚀 ~ rutasUsuario.post ~ req:`, req.body);
  res.send("post desde rutas usuarios ");
});

export default rutasUsuario;
