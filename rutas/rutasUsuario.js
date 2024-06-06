import { Router } from "express";
import UserControllers from "../Controllers/UserControllers.js";
import { verificaSesion } from "../midlewares/verificaSesion.js";
const rutasUsuario = Router();

const userControllers = new UserControllers();

rutasUsuario.post("/", userControllers.crearUser);
rutasUsuario.post("/login", userControllers.login);

rutasUsuario.get("/me", verificaSesion, userControllers.me);
rutasUsuario.use(verificaSesion)
rutasUsuario.get("/", userControllers.mostrarUser);
rutasUsuario.get("/:id", userControllers.mostrarUserPorId);
rutasUsuario.put("/:id", userControllers.updateUser);
rutasUsuario.delete("/:id", userControllers.deleteUser);

export default rutasUsuario;
