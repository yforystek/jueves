import { Router } from "express";

const rutasProducto = Router();

rutasProducto.get("/", (req, res) => {
  res.send("get all desde rutas productos ");
});

export default rutasProducto;
