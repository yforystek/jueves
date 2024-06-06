import express from "express";
import enrutador from "./rutas/enrutador.js";
import { notFound } from "./midlewares/notFound.js";
import conexion from "./conexion/conexion.js";
import { PORT } from "./config/config.js";
import roleSeed from "./seed/roleSeed.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

app.use("/api", enrutador);

app.use(notFound);

await conexion.sync({ force:true});
await roleSeed();

app.listen(PORT, () => {
  console.log(`server ok ${PORT}`);
});
