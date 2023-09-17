const { Sequelize } = require("sequelize");

const connection = new Sequelize({
  dialect: "postgres",
  database: "app",
  username: "postgres",
  password: "root",
  host: "localhost",
});

connection
  .authenticate()
  .then(() => {
    console.log("Connection with database established successfully");
  })
  .catch((err) => {
    console.log(
      `An error occured while connecting to the database: ${err.message}`
    );
  });

module.exports = connection;
