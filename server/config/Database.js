import {Sequelize} from "sequelize";

const db = new Sequelize(
    "shop_db",
    "",
    "",
    {host: "localhost", dialect: "mysql"}
);

export default db;