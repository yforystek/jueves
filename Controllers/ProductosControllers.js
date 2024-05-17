import Productos from "../Models/Productos.js";
class ProductosControllers {
  constructor() {}

  mostrarProductos = async (req, res) => {
    try {
      const data = await Productos.findAll();
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(500).send({ success: false, message: error.message });
    }
  };

  crearProducto = async (req, res) => {
    try {
      const { nombre, precio, cantidad, descripcion, categoria } = req.body;
      const data = await Productos.create({
        nombre,
        precio,
        cantidad,
        descripcion,
        categoria,
      });
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(500).send({ success: false, message: error.message });
    }
  };
}

export default ProductosControllers;
