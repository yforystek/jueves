import { Sequelize } from "sequelize";

const conexion = new Sequelize("jueves", "root", "", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
});

try {
  await conexion.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

export default conexion;
