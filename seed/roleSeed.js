import { Role } from "../Models/index.js";

const roleSeed = async () =>
  await Role.bulkCreate([
    { name: "superAdmin" },
    { name: "admin" },
    { name: "user" },
  ]);

export default roleSeed;
