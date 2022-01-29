import { Sequelize } from "sequelize";

const config = {
  host: "141.94.222.96",
  user: "root",
  database: "watchjs",
  password: "watchjs",
};

let queryCount = 0;
const db = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
  dialect: 'mysql',
  logging: (msg) => {
    console.log(msg)
    queryCount++;
  },
});

exports.db = db;


export { db };
