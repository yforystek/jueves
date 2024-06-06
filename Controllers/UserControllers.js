import { User, Role } from "../Models/index.js";
import { generadorDeToken, decodificadorDeToken } from "../utils/token.js";

class UserControllers {
  constructor() {}

  mostrarUser = async (req, res) => {
    try {
      const data = await User.findAll({
        attributes: ["name", "roleId"],
        include: [
          {
            model: Role,
            attributes: ["name"],
          },
        ],
      });
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(500).send({ success: false, message: error.message });
    }
  };
  mostrarUserPorId = async (req, res) => {
    try {
      const { id } = req.params;
      const data = await User.findOne({
        where: {
          id,
        },
        attributes: ["id", "name", "roleId"],
        include: {
          model: Role,
          attributes: ["name"],
        },
      });
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(500).send({ success: false, message: error.message });
    }
  };
  crearUser = async (req, res) => {
    try {
      const { name, password, roleId, mail } = req.body;
      const data = await User.create({
        name,
        password,
        roleId,
        mail,
      });
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(500).send({ success: false, message: error.message });
    }
  };
  updateUser = async (req, res) => {
    try {
      const { id } = req.params;
      const { name, roleId } = req.body;
      const data = await User.update(
        {
          name,
          roleId,
        },
        {
          where: {
            id,
          },
        }
      );
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(500).send({ success: false, message: error.message });
    }
  };
  deleteUser = async (req, res) => {
    try {
      const { id } = req.params;
      const data = await User.destroy({
        where: {
          id,
        },
      });
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(500).send({ success: false, message: error.message });
    }
  };
  login = async (req, res) => {
    try {
      const { mail, password } = req.body;
      const data = await User.findOne({
        where: {
          mail,
        },
      });
      if (!data) throw new Error("Credenciales chafas");
      const validate = await data.validacionPassword(password);
      if (!validate) throw new Error("Credenciales chafas");
      const payload = {
        id: data.id,
        name: data.name,
      };
      const token = generadorDeToken(payload);
      res.cookie("token", token);
      res.status(200).send({ success: true, message: "logueo exitoso" });
    } catch (error) {
      res.status(500).send({ success: false, message: error.message });
    }
  };
  me = async (req, res) => {
    try {
      const { user } = req;
      if (!user) throw new Error("Credenciales chafas logueate");
      res.status(200).send({ success: true, message: user});
    } catch (error) {
      res.status(500).send({ success: false, message: error.message });
    }
  };
}

export default UserControllers;
