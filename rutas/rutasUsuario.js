import { Router } from "express";
import UserControllers from "../Controllers/UserControllers.js";
const rutasUsuario = Router();

const userControllers = new UserControllers();

rutasUsuario.get("/",userControllers.mostrarUser);
rutasUsuario.get("/:id",userControllers.mostrarUserPorId);
rutasUsuario.post("/", userControllers.crearUser);
rutasUsuario.post("/login", userControllers.login);
rutasUsuario.put("/:id", userControllers.updateUser);
rutasUsuario.delete("/:id", userControllers.deleteUser);

export default rutasUsuario;
