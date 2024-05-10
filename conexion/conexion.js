import mysql from "mysql2";

const conexion = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: "3306",
  database: "jueves",
  password: "",
});

conexion.connect((err) => {
  if (err) throw err;
  console.log("db conectada");
});

export default conexion;
