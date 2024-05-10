import { Router } from "express";
import rutasProducto from "./rutasProducto.js";
import rutasUsuario from "./rutasUsuario.js";
// import { log } from "../midlewares/log.js";

const enrutador = Router();

// enrutador.use(log);
enrutador.use("/usuarios", rutasUsuario);
// enrutador.use(log);
// enrutador.use("/productos",log, rutasProducto);
enrutador.use("/productos", rutasProducto);

export default enrutador;
