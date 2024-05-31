import { DataTypes, Model } from "sequelize";
import conexion from "../conexion/conexion.js";
import bcrypt from "bcrypt";

class User extends Model {
  validacionPassword = async (password) => {
    const validacion = await bcrypt.compare(password, this.password);
    return validacion
  };
}

User.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mail: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    salt: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    roleId: {
      type: DataTypes.INTEGER,
      defaultValue: 2,
    },
  },
  {
    sequelize: conexion,
    modelName: "User",
  }
);

User.beforeCreate(async (user) => {
  const salt = await bcrypt.genSalt();
  user.salt = salt;
  const passwordHash = await bcrypt.hash(user.password, salt);
  user.password = passwordHash;
});

export default User;
