import { Router } from "express";
import { log } from "../midlewares/log.js";
import conexion from "../conexion/conexion.js";
// console.log(`🚀 ~ conexion:`, conexion)

const rutasProducto = Router();

rutasProducto.get("/", (req, res) => {
  const query =
    "SELECT id, nombre, cantidad, precio, descripcion FROM productos";
  conexion.query(query, (err, response, fields) => {
    console.log(`🚀 ~ conexion.query ~ fields:`, fields)
    if (err) {
      res.status(500).send({ success: false, message: err.message });
    } else {
      res.status(200).send({ success: true, message: response });
    }
  });
});

rutasProducto.get("/:id", (req, res, next) => {
  res.send("get  producto  por id");
});
rutasProducto.post("/", (req, res) => {
  res.send("post  producto ");
});
rutasProducto.put("/:id", (req, res) => {
  res.send("put producto ");
});
rutasProducto.use(log);
rutasProducto.delete("/:id", (req, res) => {
  res.send("delete producto ");
});

export default rutasProducto;
