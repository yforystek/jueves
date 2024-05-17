import express from "express";
import enrutador from "./rutas/enrutador.js";
import { notFound } from "./midlewares/notFound.js";
import conexion from "./conexion/conexion.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", enrutador);

app.use(notFound);

 await conexion.sync({ alter: true })
app.listen(8080, () => {
  console.log("server ok");
});
