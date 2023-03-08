const knex = require("knex")({
  client: "pg",
  connection: {
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "postgres",
    database: "Proyecto",
  },
});
module.exports = knex;
