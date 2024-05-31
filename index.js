import express from "express";
import enrutador from "./rutas/enrutador.js";
import { notFound } from "./midlewares/notFound.js";
import conexion from "./conexion/conexion.js";
import { PORT } from "./config/config.js";
import roleSeed from "./seed/roleSeed.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", enrutador);

app.use(notFound);

await conexion.sync({ force:false });
await roleSeed();

app.listen(PORT, () => {
  console.log(`server ok ${PORT}`);
});
