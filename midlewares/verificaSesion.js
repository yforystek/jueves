import { decodificadorDeToken } from "../utils/token.js";

export const verificaSesion = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) throw new Error("Credenciales chafas logueate");
    const { id, name } = decodificadorDeToken(token);
    req.user = { id, name };
    next()
  } catch (error) {
     res.status(500).send({ success: false, message: error.message });
  }
};
