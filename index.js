import express from "express";
import enrutador from "./rutas/enrutador.js";
import { time } from "./midlewares/time.js";
import morgan from "morgan";
import { notFound } from "./midlewares/notFound.js";


// import { log } from "./midlewares/log.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(log);
// app.use(time);
// app.use(morgan("tiny"));

// app.use(log, enrutador);
app.use("/api", enrutador);

app.use(notFound);

app.listen(8080, () => {
  console.log("server ok");
});
