import { Router } from "express";
import { log } from "../midlewares/log.js";
import ProductosControllers from "../Controllers/ProductosControllers.js";

const productosControllers = new ProductosControllers();
const rutasProducto = Router();

rutasProducto.get("/", productosControllers.mostrarProductos);
rutasProducto.get("/:id",);
rutasProducto.post("/", productosControllers.crearProducto);
rutasProducto.put("/:id",);
rutasProducto.use(log);
rutasProducto.delete("/:id", );

export default rutasProducto;
