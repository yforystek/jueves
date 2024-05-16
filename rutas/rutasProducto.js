import { Router } from "express";
import { log } from "../midlewares/log.js";
import conexion from "../conexion/conexion.js";
// console.log(`🚀 ~ conexion:`, conexion)

const rutasProducto = Router();

rutasProducto.get("/", (req, res) => {
  const query =
    "SELECT id, nombre, cantidad, precio, descripcion FROM productos";
  conexion.query(query, (err, response, fields) => {
    if (err) {
      res.status(500).send({ success: false, message: err.message });
    } else {
      res.status(200).send({ success: true, message: response });
    }
  });
});

rutasProducto.get("/:id", (req, res) => {
  const { id } = req.params;
  // const query = `SELECT id, nombre, cantidad, precio, descripcion FROM productos WHERE id= ${id}`;
  // conexion.query(query, (err, response) => {
  //   if (err) {
  //     res.status(500).send({ success: false, message: err.message });
  //   } else {
  //     res.status(200).send({ success: true, message: response });
  //   }
  // });

  const query = `SELECT id, nombre, cantidad, precio, descripcion FROM productos WHERE id=?`;
  conexion.query(query, [id], (err, response) => {
    if (err) {
      res.status(500).send({ success: false, message: err.message });
    } else {
      res.status(200).send({ success: true, message: response });
    }
  });
});
rutasProducto.post("/", (req, res) => {
  const { nombre, cantidad, precio, descripcion } = req.body;
  const query = `INSERT INTO productos (nombre, cantidad, precio, descripcion ) VALUES (?,?,?,?)`;
  conexion.query(
    query,
    [nombre, cantidad, precio, descripcion],
    (err, response) => {
      if (err) {
        res.status(500).send({ success: false, message: err.message });
      } else {
        res
          .status(200)
          .send({ success: true, message: "producto creado con exito" });
      }
    }
  );
});
rutasProducto.put("/:id", (req, res) => {
  const { id } = req.params;
  const { nombre, cantidad, precio, descripcion } = req.body;
  const query = `UPDATE productos SET  nombre=?, cantidad=?, precio=? ,descripcion=? WHERE id=?`;
  conexion.query(
    query,
    [nombre, cantidad, precio, descripcion, id],
    (err, response, field) => {
      if (err) {
        res.status(500).send({ success: false, message: err.message });
      } else {
        res
          .status(200)
          .send({ success: true, message: "producto modificado con exito" });
      }
    }
  );
});
rutasProducto.use(log);
rutasProducto.delete("/:id", (req, res) => {
  const { id } = req.params;
  const query = `DELETE FROM productos WHERE id=?`;
  conexion.query(query, [id], (err, response, field) => {
    if (err) {
      res.status(500).send({ success: false, message: err.message });
    } else {
      const message = response.affectedRows
        ? "producto eliminado con exito"
        : "el producto no existe";
      res.status(200).send({ success: true, message });
    }
  });
});

export default rutasProducto;
